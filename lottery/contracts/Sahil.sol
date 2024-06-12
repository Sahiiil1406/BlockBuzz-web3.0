// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

contract socialMediacontract{
  uint public userCount=0;
  uint public postCount=0;
  string public name="sahil";
  struct User{
    uint id;
    string name;
    string bio;
    uint amount;
    address add;
  }

  struct Post{
    uint id;
    string images;
    string title;
    address owner;
  }
  function deploy() public view returns(uint){
    return userCount;
  }
  
  mapping (address=>User) public addressToUser;
  User[] public  userList;
  Post[] public postList;
  mapping (address=>Post[]) public postByuser;


  function alreadyAUser()view public returns   (bool){
       uint len=userList.length;
       for(uint i=0;i<len;i++){
        if(msg.sender==userList[i].add){
          return true;
        }
       }
       return false;
  }

  function createUser(string memory _name,string memory _bio)public {
    require(!alreadyAUser(),"U are already a User");
    User memory new_user=User(userCount,_name,_bio,150,msg.sender);
    userList.push(new_user);
    addressToUser[msg.sender]=new_user;
    userCount++;
  }

  function updateUser(string memory _name,string memory _bio)public {
    addressToUser[msg.sender].name=_name;
    addressToUser[msg.sender].bio=_bio;
    uint id=addressToUser[msg.sender].id;
    userList[id].name=_name;
    userList[id].bio=_bio;
  }

  /* function getUserbyId(uint _id)view public returns ( User memory) {
    return userList[_id];
  } */

  function createAPost(string memory _images,string memory _title)public {
    require(alreadyAUser(),"You are not a user.Please sign in first");
    Post memory new_post=Post(postCount,_images,_title,msg.sender);
    postList.push(new_post);
    postCount++;
    postByuser[msg.sender].push(new_post);
  }

  function updateApost(uint _id,string memory _images,string memory _title)public {
     require(alreadyAUser(),"You are not a user.Please sign in first");
     require(postList[_id].owner==msg.sender,"This post doesnot created by You");
     postList[_id].images=_images;
     postList[_id].title=_title;
  }

  function postToUser(uint _id)public view returns (User memory) {
   address  add= postList[_id].owner;
   User memory temp=addressToUser[add];
   return temp;
  }

  //function to get all post of a user
  function getPostByUser()public view returns(Post[] memory){
    return postByuser[msg.sender];
  }


  function getAllPost () public view returns(Post[] memory){
    return postList;
  }

 function getAllUser()public view returns(User[] memory){
   return userList;
 }
  
  function getUserPostByAdress(address _add)public view returns(Post[] memory){
    return postByuser[_add];
  }

}



      