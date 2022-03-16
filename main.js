function button_login(){
    player_1_name = document.getElementById("Player1_name").value;
    player_2_name = document.getElementById("Player2_name").value;

    localStorage.setItem("Player1_name", player_1_name);
    localStorage.setItem("Player2_name", player_2_name);

    window.location = "gamepage.html";
}