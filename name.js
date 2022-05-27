@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body{
  font-family: 'Fredoka One', cursive;
  background-image: linear-gradient(to right, #E22865, #37ADCD);
  color: #fff;
}

.container{
  width: 1280px;
  margin: auto;
}

#header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  min-height: 70px;
  padding: 0 20px;
}

#header h2{font-size: 2rem;}

.user_input{
  margin-top: 2px;
  width: 350px;
  text-align: center;
}

.user_input input{
  width: 75%;
  outline: none;
  padding: 8px;
  border: 1px solid lightgray;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  -webkit-transition: all 0.30s ease-in-out;
  -moz-transition: all 0.30s ease-in-out;
  -ms-transition: all 0.30s ease-in-out;
  -o-transition: all 0.30s ease-in-out;
  transition: all 0.30s ease-in-out;
}

.user_input input:focus{
  box-shadow: 0 0 5px #E22865;
  border: 1px solid #E22865;
}

.user_input button{
  cursor: pointer;
  padding: 8px;
  width: fit-content;
  color: black;
  transition: 1s;
  outline: none;
  background-color: lightgray;
  border: 1px solid lightgray;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.user-input button:hover{
  background-color: transparent;
  color: white;
}

#to_do_list{
  width: 500px;
  margin: auto;
}

.item{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  border-radius: 2px;
  padding: 1rem;
  color: #454545;
  margin-top:10px;
  font-size: 1rem;
  background-color: white;
  border: 1px solid lightgray;
  text-transform: uppercase;
  -webkit-transition: all 0.30s ease-in-out;
  -moz-transition: all 0.30s ease-in-out;
  -ms-transition: all 0.30s ease-in-out;
  -o-transition: all 0.30s ease-in-out;
  transition: all 0.30s ease-in-out;
}

.item:hover{
  box-shadow: 0 0 20px #E22865;
  border: 1px solid #E22865;
}

.item i{
  cursor: pointer;
  margin: 0 5px;
}

@media(max-width:1280px){
  .container{width: 100%;}
}

@media(max-width:768px){
  .container{width: 95%;}
  
  #header{
    padding: 20px;
    gap: 10px;
    align-items: center;
    flex-direction: column;
  }

  #header h2{margin: 10px 0;}

  .user_input{width: 100%;}

  #to_do_list{width: 100%;}
}

@media(max-width:480px){
  .user_input input{width: 74%;}
}

@media(max-width:320px){
  .user_input input{width: 60%;}
}
