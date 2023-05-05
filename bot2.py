#!/usr/bin/env python3
# ~~~~~==============   HOW TO RUN   ==============~~~~~
# 1) Configure things in CONFIGURATION section
# 2) Change permissions: chmod +x bot2.py
# 3) Run in loop: while true; do ./bot2.py --test prod-like; sleep 1; done
# 3) Run in loop: while true; do ./bot2.py --test slower; sleep 1; done
# 3) Run in loop: while true; do ./wip-bot.py --prod slower; sleep 1; done
# 3) Run in loop: while true; do ./bot1.py --slower ; sleep 1; done

import argparse
from collections import deque
from enum import Enum
import time
import socket
import json
import math

# ~~~~~============== CONFIGURATION  ==============~~~~~
# Replace "REPLACEME" with your team name!
team_name = "UMBREON"

# ~~~~~============== MAIN LOOP ==============~~~~~

# You should put your code here! We provide some starter code as an example,
# but feel free to change/remove/edit/update any of it as you'd like. If you
# have any questions about the starter code, or what to do next, please ask us!
#
# To help you get started, the sample code below tries to buy BOND for a low
# price, and it prints the current prices for VALE every second. The sample
# code is intended to be a working example, but it needs some improvement
# before it will start making good trades!



def main():
    order_id_counter = 0 
    args = parse_arguments()

    exchange = ExchangeConnection(args=args)

    # Store and print the "hello" message received from the exchange. This
    # contains useful information about your positions. Normally you start with
    # all positions at zero, but if you reconnect during a round, you might
    # have already bought/sold symbols and have non-zero positions.

    vale_position, vale_position_limit = 0 , 10
    bond_position , bond_position_limit = 0, 100
    gs_position, gs_position_limit = 0, 100
    ms_position , ms_position_limit = 0 , 100
    valbz_position, valbz_position_limit = 0, 10
    wfc_position, wfc_position_limit = 0 ,100
    xlf_position, xlf_position_limit  = 0, 100

    hello_message = exchange.read_message()
    print("First message from exchange:", hello_message)
    symbols = hello_message["symbols"]
    for symbol in symbols:
        if symbol['symbol'] == "BOND":
            bond_position = symbol['position']
        elif symbol['symbol'] == "VALE":
            vale_position = symbol['position']
        elif symbol['symbol'] == "VALZ":
            valbz_position = symbol['position']
    # Send an order for BOND at a good price, but it is low enough that it is
    # unlikely it will be traded against. Maybe there is a better price to
    # pick? Also, you will need to send more orders over time.
    exchange.send_add_message(order_id=order_id_counter, symbol="BOND", dir=Dir.BUY, price=999, size=100)
    order_id_counter += 1
    exchange.send_add_message(order_id=order_id_counter, symbol="BOND", dir=Dir.SELL, price=1001, size=100)
    order_id_counter += 1

    # Set up some variables to track the bid and ask price of a symbol. Right
    # now this doesn't track much information, but it's enough to get a sense
    # of the VALE market.
    vale_bid_price, vale_ask_price = None, None
    vale_last_print_time = time.time()
  
    bond_bid_price, bond_ask_price = None, None
    bond_last_print_time = time.time()

    gs_bid_price, gs_ask_price = None, None
    gs_last_print_time = time.time()

    ms_bid_price,ms_ask_price = None, None
    ms_last_print_time = time.time()

    usd_bid_price, usd_ask_price = None, None
    usd_last_print_time = time.time()

    valbz_bid_price,valbz_ask_price = None, None
    valbz_last_print_time = time.time()
    
    wfc_bid_price,wfc_ask_price = None, None
    wfc_last_print_time = time.time()

    xlf_bid_price,xlf_ask_price = None, None
    xlf_last_print_time = time.time()

    def buy(ticker, cprice, csize, order_id_counter):
        exchange.send_add_message(order_id=order_id_counter, symbol=ticker, dir=Dir.BUY, price=cprice, size=csize)
        
        

    def sell(ticker, cprice, csize, order_id_counter):
        exchange.send_add_message(order_id=order_id_counter, symbol=ticker, dir=Dir.SELL, price=cprice, size=csize)

    # Here is the main loop of the program. It will continue to read and
    # process messages in a loop until a "close" message is received. You
    # should write to code handle more types of messages (and not just print
    # the message). Feel free to modify any of the starter code below.
    #
    # Note: a common mistake people make is to call write_message() at least
    # once for every read_message() response.
    #
    # Every message sent to the exchange generates at least one response
    # message. Sending a message in response to every exchange message will
    # cause a feedback loop where your bot's messages will quickly be
    # rate-limited and ignored. Please, don't do that!
    vale_fair_value , valbz_fair_value= -1 , -1

    # this is called on every message
    while True:
        message = exchange.read_message()

        # Some of the message types below happen infrequently and contain
        # important information to help you understand what your bot is doing,
        # so they are printed in full. We recommend not always printing every
        # message because it can be a lot of information to read. Instead, let
        # your code handle the messages and just print the information
        # important for you!
        if message["type"] == "close":
            print("The round has ended")
            break
        elif message["type"] == "error":
            print(message)
        elif message["type"] == "reject":
            print(message)
        elif message["type"] == "fill":
            # print("{DEBUG",message)
            def order_fill(message, position, ticker):
                if message["dir"] == Dir.BUY:
                    position += message["size"]
                elif message["dir"] == Dir.SELL:
                    position -= message["size"]
                return position 

            if message["symbol"] == "VALE":
                vale_position = order_fill(message, vale_position, "VALE")

            elif message["symbol"] == "BOND":
                if message["dir"] == Dir.BUY:
                    bond_position += message["size"]
                    sell("BOND", bond_ask_price,message["size"],  order_id_counter)
                elif message["dir"] == Dir.SELL:
                    bond_position -= message["size"]
                    buy("BOND", bond_bid_price,message["size"], order_id_counter)

        
            elif message["symbol"] == "GS":
                gs_position = order_fill(message, gs_position, "GS")
            elif message["symbol"] == "MS":
                ms_position = order_fill(message, ms_position, "MS")
            elif message["symbol"] == "VALBZ":
                valbz_position = order_fill(message, valbz_position, "VALBZ")
            elif message["symbol"] == "WFC":
                wfc_position = order_fill(message, wfc_position, "WFC")
            elif message["symbol"] == "XLF":
                xlf_position = order_fill(message, xlf_position, "XLF")
            order_id_counter += 1 
        elif message["type"] == "book":
            now = time.time()

            def best_price(message, side):
                    if message[side]:
                        return message[side][0][0]


            def find_fair_value(message):
                pass
                # print("[DEBUG]", message)


            if message["symbol"] == "VALE":
                vale_bid_price = best_price(message, "buy")
                vale_ask_price = best_price(message, "sell")

                if vale_bid_price and vale_ask_price:
                    vale_fair_value = (vale_bid_price + vale_ask_price) /2 
                    vale_self_buy, vale_self_sell = math.floor(vale_fair_value - 1), math.ceil(vale_fair_value + 1)
                    detect_vale_valbz = True

            elif message["symbol"] == "VALBZ":
                valbz_bid_price = best_price(message, "buy")
                valbz_ask_price = best_price(message, "sell")

                if valbz_bid_price and valbz_ask_price:
                    valbz_fair_value = (valbz_bid_price + valbz_ask_price) /2 
                    valbz_self_buy, valbz_self_sell = math.floor(valbz_fair_value - 1), math.ceil(valbz_fair_value + 1)
                    detect_vale_valbz = True

                if now > valbz_last_print_time + 1:
                    valbz_last_print_time = now
                    print(
                        {
                            "valbz_bid_price": valbz_bid_price,
                            "valbz_ask_price": valbz_ask_price,
                        }
                    )

            elif message["symbol"] == "BOND":
                
                bond_bid_price = best_price(message,"buy")
                bond_ask_price = best_price(message,"sell")
                
                
            elif message["symbol"] == "GS": 
                gs_bid_price = best_price(message, "buy")
                gs_ask_price = best_price(message, "sell")

                if gs_ask_price and gs_bid_price:
                    gs_fair_value = (gs_bid_price + gs_ask_price) /2 
                    gs_self_buy, gs_self_sell = math.floor(gs_fair_value - 1), math.ceil(gs_fair_value + 1)
              
            elif message["symbol"] == "MS":                
                ms_bid_price = best_price(message, "buy")
                ms_ask_price = best_price(message, "sell")

                if ms_bid_price and ms_ask_price:
                    ms_fair_value = (ms_bid_price + ms_ask_price) /2 
                    ms_self_buy, ms_self_sell = math.floor(ms_fair_value - 1), math.ceil(ms_fair_value + 1)

            elif message["symbol"] == "WFC":
                wfc_bid_price = best_price(message, "buy")
                wfc_ask_price = best_price(message, "sell")

                if wfc_bid_price and wfc_ask_price:
                    wfc_fair_value = (wfc_bid_price + wfc_ask_price) /2 
                    wfc_self_buy, wfc_self_sell = math.floor(wfc_fair_value - 1), math.ceil(wfc_fair_value + 1)

            elif message["symbol"] == "XLF":
                pass

            # logic after calculating fair value 
            if detect_vale_valbz:
                detect_vale_valbz = False
                if not (valbz_fair_value == -1 or vale_fair_value == -1):
                    if vale_fair_value > valbz_fair_value:
                        buy_size = valbz_position_limit - valbz_position
                        if buy_size != 0:
                            buy("VALBZ", valbz_ask_price, buy_size, order_id_counter)
                            valbz_position += buy_size
                            order_id_counter += 1

                        sell_size = vale_position_limit + vale_position
                        if sell_size != 0:
                            sell("VALE", vale_bid_price, vale_position_limit + vale_position, order_id_counter)
                            vale_position -= sell_size
                            order_id_counter += 1

                    elif valbz_fair_value > vale_fair_value:
                        buy_size = vale_position_limit - vale_position
                        if buy_size != 0:
                            buy("VALE", vale_ask_price, vale_position_limit - vale_position, order_id_counter)
                            order_id_counter += 1
                            vale_position += buy_size 

                        sell_size = valbz_position_limit + valbz_position
                        if sell_size != 0:
                            sell("VALBZ", valbz_bid_price, valbz_position_limit + valbz_position, order_id_counter)
                            order_id_counter += 1
                            valbz_position -= sell_size 
            


# ~~~~~============== PROVIDED CODE ==============~~~~~

# You probably don't need to edit anything below this line, but feel free to
# ask if you have any questions about what it is doing or how it works. If you
# do need to change anything below this line, please feel free to


class Dir(str, Enum):
    BUY = "BUY"
    SELL = "SELL"


class ExchangeConnection:
    def __init__(self, args):
        self.message_timestamps = deque(maxlen=500)
        self.exchange_hostname = args.exchange_hostname
        self.port = args.port
        exchange_socket = self._connect(add_socket_timeout=args.add_socket_timeout)
        self.reader = exchange_socket.makefile("r", 1)
        self.writer = exchange_socket

        self._write_message({"type": "hello", "team": team_name.upper()})

    def read_message(self):
        """Read a single message from the exchange"""
        message = json.loads(self.reader.readline())
        if "dir" in message:
            message["dir"] = Dir(message["dir"])
        return message

    def send_add_message(
        self, order_id: int, symbol: str, dir: Dir, price: int, size: int
    ):
        """Add a new order"""
        self._write_message(
            {
                "type": "add",
                "order_id": order_id,
                "symbol": symbol,
                "dir": dir,
                "price": price,
                "size": size,
            }
        )

    def send_convert_message(self, order_id: int, symbol: str, dir: Dir, size: int):
        """Convert between related symbols"""
        self._write_message(
            {
                "type": "convert",
                "order_id": order_id,
                "symbol": symbol,
                "dir": dir,
                "size": size,
            }
        )

    def send_cancel_message(self, order_id: int):
        """Cancel an existing order"""
        self._write_message({"type": "cancel", "order_id": order_id})

    def _connect(self, add_socket_timeout):
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

        if add_socket_timeout:
            # Automatically raise an exception if no data has been recieved for
            # multiple seconds. This should not be enabled on an "empty" test
            # exchange.
            s.settimeout(5)
        s.connect((self.exchange_hostname, self.port))
        return s

    def _write_message(self, message):
        what_to_write = json.dumps(message)
        if not what_to_write.endswith("\n"):
            what_to_write = what_to_write + "\n"

        length_to_send = len(what_to_write)
        total_sent = 0
        while total_sent < length_to_send:
            sent_this_time = self.writer.send(
                what_to_write[total_sent:].encode("utf-8")
            )
            if sent_this_time == 0:
                raise Exception("Unable to send data to exchange")
            total_sent += sent_this_time

        now = time.time()
        self.message_timestamps.append(now)
        if len(
            self.message_timestamps
        ) == self.message_timestamps.maxlen and self.message_timestamps[0] > (now - 1):
            print(
                "WARNING: You are sending messages too frequently. The exchange will start ignoring your messages. Make sure you are not sending a message in response to every exchange message."
            )


def parse_arguments():
    test_exchange_port_offsets = {"prod-like": 0, "slower": 1, "empty": 2}

    parser = argparse.ArgumentParser(description="Trade on an ETC exchange!")
    exchange_address_group = parser.add_mutually_exclusive_group(required=True)
    exchange_address_group.add_argument(
        "--production", action="store_true", help="Connect to the production exchange."
    )
    exchange_address_group.add_argument(
        "--test",
        type=str,
        choices=test_exchange_port_offsets.keys(),
        help="Connect to a test exchange.",
    )

    # Connect to a specific host. This is only intended to be used for debugging.
    exchange_address_group.add_argument(
        "--specific-address", type=str, metavar="HOST:PORT", help=argparse.SUPPRESS
    )

    args = parser.parse_args()
    args.add_socket_timeout = True

    if args.production:
        args.exchange_hostname = "production"
        args.port = 25000
    elif args.test:
        args.exchange_hostname = "test-exch-" + team_name
        args.port = 25000 + test_exchange_port_offsets[args.test]
        if args.test == "empty":
            args.add_socket_timeout = False
    elif args.specific_address:
        args.exchange_hostname, port = args.specific_address.split(":")
        args.port = int(port)

    return args


if __name__ == "__main__":
    # Check that [team_name] has been updated.
    assert (
        team_name != "REPLACEME"
    ), "Please put your team name in the variable [team_name]."

    main()
