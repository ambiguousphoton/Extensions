let ram_mandir = [
    "https://th.bing.com/th/id/R.de6322809e2a60a6f38053110d3505fa?rik=zmJSPlGHnU2BAQ&riu=http%3a%2f%2fyoumeandtrends.com%2fwp-content%2fuploads%2f2015%2f10%2fRam-sharnam-ram-ji-photos.jpg&ehk=3Bo9vy6Sj4lignJm4hWmENnwlp75wg0Nsj7AmWUBm%2fc%3d&risl=&pid=ImgRaw&r=0",
    "https://youmeandtrends.com/wp-content/uploads/2018/03/beautiful-ram-ji.jpg",
    "https://1.bp.blogspot.com/-z-pQPgZQ7KY/V1RoHDAuCsI/AAAAAAAAMgA/jsCeUyFEGwIK7YXLDypolm4ZoV8IARuOwCLcB/s1600/lord-ram-hanuman-shita-maiya-laxman-images.jpg",
    "https://i.pinimg.com/736x/60/cc/10/60cc1069e121b535c977f35dd66a2a9d.jpg",
    "https://th.bing.com/th/id/OIP.LIzoLtMs9_x8yPRdBK9GDwHaFD?pid=ImgDet&rs=1",
    "https://i.pinimg.com/originals/11/ab/d6/11abd668e521904f25e44625e846e7b2.jpg",
    "https://wallpapercave.com/wp/wp3170548.jpg"
];

const imags = document.getElementsByTagName("img");
for (let i = 0; i < imags.length; i++) {

    const rimg = Math.floor(Math.random() * ram_mandir.length)
    imags[i].src = ram_mandir[rimg]
}


let ram_nam = [
    "jai_Shree_ram",
    "har_har_mahadev",
    "tel_lagalo_dabur_ka_nam_mita_do_babur_ka"

]


const headings = document.getElementsByTagName("h1");
for (let i = 0; i < headings.length; i++) {
    const rhed = Math.floor(Math.random() * ram_nam.length)
    headings[i].src = ram_nam[rhed]
}