document.addEventListener('DOMContentLoaded', () => {
    // Ваш код выполнится после загрузки HTML
        let inpt = 'ru';
        let result;
    
        let zapros = 'https://api.2ip.io/?token=wdzdzx9tobbwd25k&lang='+inpt;
        console.log(zapros);
        fetch(zapros)
        .then(response => response.json())
        .then(data => {
            result = data;
            let massiv ={
                "city" : result.country,
                "region" : result.timezone,
                "domen" : result.code,
            }
            console.log(massiv);
            let result1;
            let zapros1 = 'https://tenor.googleapis.com/v2/search?key=AIzaSyC-P6_qz3FzCoXGLk6tgitZo4jEJ5mLzD8&media_filter=gif%2Cgif_transparent%2Cmediumgif%2Ctinygif%2Ctinygif_transparent%2Cwebp%2Cwebp_transparent%2Ctinywebp%2Ctinywebp_transparent%2Ctinymp4%2Cmp4%2Cwebm%2Coriginalgif%2Cgifpreview&q='+result.country;
            console.log(zapros1);
            fetch(zapros1)
            .then(response => response.json())
            .then(data => {
                result1 = data;
                const flag = data.results[0].media_formats.gif.url;
                console.log(flag);
                document.getElementById('flags').src = flag;
            });
            document.getElementById('name').textContent = massiv.city;
            document.getElementById('info').textContent = 'Расположение: '+massiv.region+' Домен:'+massiv.domen;
        });
        

     

});
