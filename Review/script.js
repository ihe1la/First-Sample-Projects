const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img: "img/1.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
      "img/2.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
      "img/3.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
      "img/4.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const  info= document.getElementById("info");

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");


  let currentitem = 0;


  window.addEventListener("DomContentLoader",function(){
    //   console.log(("shake nd bake"));
    showPerson()
});
    function showPerson(person){
        const item = reviews[currentitem]
        img.src=item.img
        author.textContent = item.name;
        job.textContent = item.job;
        info.textContent = item.text;
    }

    nextBtn.addEventListener("click",function(){
        currentitem++;
        if(currentitem>reviews.length-1){
            currentitem=0;
        }
        showPerson();
    });
    prevBtn.addEventListener("click",function(){
        currentitem--;
        if(currentitem<0){
            currentitem=reviews.length-1;
        }
        showPerson();
    });
    randomBtn.addEventListener("click",function(){
        currentitem = Math.floor(Math.random()*reviews.length);
        console.log(currentitem);
        showPerson();
    });

