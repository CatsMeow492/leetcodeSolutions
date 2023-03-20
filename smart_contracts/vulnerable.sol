// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Vulnerable {
    mapping (address => uint) balances;

    function transfer(
        address _to,
        uint _amount
    ) public {
        uint fromBalance = balances [msg.sender];
        uint toBalance = balances [_to];

        unchecked {
            balances [msg.sender] = fromBalance - _amount;
            balances [_to] = toBalance + _amount;
        }
    }
}