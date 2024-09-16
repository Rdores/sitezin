<!DOCTYPE html>
<html lang="pt-br">
<head>
    <link rel="stylesheet" href="./css/main.css">
    <meta charset="UTF-8">
    <link rel="icon" href="./img/logommtv.jpg" type="image/jpg">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>

    <?php 
    include('js/main.php'); 
    ?>
</head>
<body>
    <main id="main">
        <p id="titl">Mumio's TV</p> 

        <div id="perfildiv">
            <img  id="perfilbtn" src="./img/perfil.png" alt="">
        </div>
    </main> 
    
    <div id="imgfundo">
        <div id="sombraimg"> 
            
        </div>
        <img id="imgcanais" src="./img/fundoimagem.jpg" alt="">
   
        <div id="dts">
            <div id="dts1">
                <img id="raio" src="./img/raio.png" alt="">
            </div>
            <div id="dts2">
                <img id="wifi" src="./img/wifi.png" alt="">
            </div>
            <div id="dts3">
                <img id="qualidade" src="./img/qualidade.png" alt="">
            </div>
            
            <div id="start">
                assistir
            </div>
            <p id="dtstxt" style="color: white;"></p>
        </div>
    </div> 

    <div id="faqdiv">
        <div id="ftop"> 
            <img id="faqimg" src="./img/IGFT.jpg" alt=""> 

            <p id="devtxt">Desenvolvedor</p>
        </div>
        <div id="ftop2">
            <div id="faqbutton">
                entre em contato
            </div>
        </div>
    </div>
   
</body>
</html>