import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

//import postman from "../../assets/postman.png";

const postman = require("../../assets/facebook2.png");


// node-icon.svg

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-base text-indigo-500 font-large text-center text-justify text-white">
          Greetings! I'm Salinda Lakshan Gunarathna, a passionate tech enthusiast committed
          to shaping innovative digital solutions. Currently pursuing my undergraduate
          degree in Computer Engineering at the University of Ruhuna, I'm in my third
          year of study. As I embark on this journey, I'm eager to delve into the
          realms of software engineering, with a keen interest in integrating it
          with DevOps practices. My goal is to evolve into a proficient DevOps engineer,
          blending my technical acumen with continuous learning and hands-on experience.
        </span>

        <span className="block mb-4 text-xs md:text-base text-indigo-500 font-large text-center text-justify text-white">
          With extensive experience in various technologies, I specialize in
          web application development using the MERN Stack. My focus lies in backend
          development, where I contribute expertise in OOP concepts and design patterns.
          Additionally, I'have basic knowledge in DevOps tooling such as Docker, Kubernetes, AWS,
          Terraform, Jenkins, and Ansible.

          Beyond web applications, I also have expertise in mobile application development
          using Flutter and Firebase. Furthermore, I've developed machine learning models in
          Python, integrating them with various algorithms for diverse applications.
        </span>

      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    // express
    src: "https://markovate.com/wp-content/uploads/2022/06/Is-Express.js-Framework-An-Ideal-Choice-For-Developing-Enterprise-Applications_@2x-1280x960.png.webp"
    //src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 2, // react
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSezGYJz5w9yMj5nuFzipYIjvzNTEODKE2PRw&usqp=CAU"
    //src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,// flutter
    src: "https://png.pngtree.com/png-vector/20220812/ourmid/pngtree-flutter-logo-icon-png-image_6108134.png"
    //src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,// mongodb
    src: "https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Photo.png"
    //src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,// html and css
    src: "https://miro.medium.com/v2/resize:fit:792/1*lJ32Bl-lHWmNMUSiSq17gQ.png"
    //src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
  },
  {
    id: 6, // springboot
    src: "https://miro.medium.com/v2/resize:fit:1000/1*XtjiQD35ja0DcA9H-JuM-g.png"
    // src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 7,// docker
    src: "https://miro.medium.com/v2/resize:fit:700/0*lpa1F-uSiw0SKbFu.jpeg"
    //src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 8, // kubunaties
    src: "https://l450v.alamy.com/450v/2jj4da9/kubernetes-logo-black-background-2jj4da9.jpg"
    //src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 9,// firebase
    src: "https://ih1.redbubble.net/image.1853612724.0607/raf,360x360,075,t,fafafa:ca443f4786.jpg"
    // src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 10,// mysql
    src: "https://www.webasha.com/uploads/course/images/65193baacd09d1696152490.sql-mysql_training.jpg"
    //src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 11,
    //src:"https://e1.pngegg.com/pngimages/119/386/png-clipart-clay-os-6-a-macos-icon-intellij-idea-ij-logo-thumbnail.png"
    //src:"https://banner2.cleanpng.com/20180913/uto/kisspng-intellij-idea-jetbrains-integrated-development-env-5b9a70df9dd6c3.3468850615368480956465.jpg"
    //src:"data:image/jpeg;base64,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"
    //src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
  },

  {
    id: 13,
    src: "https://upload.wikimedia.org/wikipedia/en/5/5a/Proteus_Design_Suite_Atom_Logo.png",
  },
  {
    id: 14,// JAVA
    src: "https://stickerhub.ru/cache/b/b/0/9/a/bb09aa933da970fe7b10ff02bf15713994fd90ae.png?v30",
    //src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    id: 15,//javascript
    //src:"https://www.clipartmax.com/png/small/89-894960_js-discord-bot-logo-node-js-and-react-js.png"
    src: "https://friconix.com/png/fi-cnsuxx-nodejs.png"  //somthay good
    //src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
  },
  {
    id: 16,//eclips
    //src:"https://www.tutorialspoint.com/eclipse/images/eclipse-mini-logo.jpg"
    //src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;