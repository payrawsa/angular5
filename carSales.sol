pragma solidity >=0.4.22 <0.6.0;
contract CarSales {

    address public owner;
    event Deposit(address accountAddress, uint amount);
    constructor() public {
        owner = msg.sender;
    }

    struct User {
    bytes32 userName;
    uint256 balance;
    bool exists;
    }

    mapping(address => User) public users;

        function register(address userAddress, bytes32 userName) public {
    User storage user = users[userAddress];
    require(!user.exists);
    users[userAddress] = User({
        userName: userName,
        balance: 500,
        exists: true
    });
    }
        function unregister(address userAddress) public {
    User storage user = users[userAddress];
    require(user.exists);
    delete users[userAddress];
    }

        function settle(uint amount, address buyerAddress, address sellerAddress) payable public returns (string memory value) {
            users[buyerAddress].balance-=amount;
            users[sellerAddress].balance+=amount;
            return "buy went through and payment has been settled";
    }

        function buy(uint purchaseAmount, address buyerAddress, address sellerAddress) payable public returns(string memory value) {
        //avoid overflow
        if (users[buyerAddress].balance>=purchaseAmount){
            settle(purchaseAmount, buyerAddress, sellerAddress);
        }
        return "you need to deposit";
    }

    //function to deposit more coins into the account
    function deposit(address _userAddress, uint depositAmount) public{
        //avoid overflow
        User storage user = users[_userAddress];
        require(user.exists);
        users[_userAddress].balance += depositAmount;
        return;
    }

    //function to view how many coins  are in the bank
    function view_balance(address _userAddress) view public returns (uint) {
        return users[_userAddress].balance;
    }
}
