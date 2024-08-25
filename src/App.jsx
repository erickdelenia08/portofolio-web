import TopBar from "./components/TopBar"
import { useEffect, useState } from 'react';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from './firebase/firebase';
import MySkills from "./pages/about/MySkills";
import WarningModal from "./components/WarningModal";

function App() {
  const [videos, setVideos] = useState([]);
  const [showWarning, setShowWarning] = useState(true);

  const handleCloseWarning = () => {
    setShowWarning(false);
  };

  useEffect(() => {
    const videosRef = ref(storage, 'videos/');

    listAll(videosRef)
      .then((res) => {
        const promises = res.items.map((itemRef) =>
          getDownloadURL(itemRef).then((url) => ({
            name: itemRef.name,
            url,
          }))
        );

        Promise.all(promises).then((results) => {
          setVideos(results);
        });
      })
      .catch((error) => {
        console.error("Error listing videos:", error);
      });
  }, []);

  return (
    <div className="bg-main-col w-screen">
      <TopBar />
      <div className="lg:flex-row flex flex-col px-5 sm:px-40 h-dvh w-screen shadow-xl">
        <div className="flex flex-col flex-1 font-montserrat justify-center">
          <span className="text-2xl 2xl:text-5xl font-bold text-white-col">I'M</span>
          <span className="text-6xl 2xl:text-8xl font-bold text-gold-col">Erick Delenia</span>
          <span className="text-2xl 2xl:text-5xl font-bold text-white-col">Coder & Animator</span>
          <button className=" bg-main-col border-4 border-gold-col rounded-lg h-16 mt-6 flex items-center justify-center select-none text-gold-col hover:bg-gold-col hover:text-main-col">
            <span className="font-montserrat font-bold sm:text-2xl px-5">Contact Me</span>
          </button>
        </div>
        <div className="flex items-center justify-end flex-1 order-first md:order-2">
          <div className="aspect-square w-4/5 bg-scnd-col rounded-full relative flex items-center justify-center overflow-hidden">
            <div className="h-1/5 w-1/5 bg-main-col rounded-full flex gap-2 items-center justify-center">
              <div className="h-1/5 w-1/5 bg-white-col rounded-full flex -translate-y-3">

              </div>
              <div className="h-1/5 w-1/5 bg-white-col rounded-full flex -translate-y-3">
              </div>

            </div>
            <div className="h-3/5 w-3/5 bg-main-col rounded-full absolute bottom-0 translate-y-1/2">
            </div>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
      <div className="px-5 sm:px-40 font-montserrat text-white-col flex flex-col gap-4">
        <span className="text-2xl sm:text-4xl font-bold">About</span>
        <span className="text-justify sm:text-2xl text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam aliquam numquam expedita nisi veniam quisquam amet deleniti blanditiis molestias corporis minima obcaecati corrupti aperiam, nam vel unde nulla commodi. Assumenda!
          Facere neque nihil reprehenderit corporis, est odio? Ipsam dolore repudiandae sit provident dolorem itaque, incidunt facere repellat asperiores? Aut, minus provident? Ratione voluptatem, exercitationem beatae quod placeat quae laudantium ad.
          Porro quos excepturi, voluptates quidem accusantium cumque, sed harum sit molestiae iusto iste laudantium id doloribus veritatis, saepe eos. Pariatur facere voluptas nemo similique laudantium corporis necessitatibus exercitationem eligendi illum!</span>
      </div>
      <div className="h-40"></div>
      <div className="text-4xl font-bold px-5 sm:px-40 font-montserrat text-white-col flex flex-col">
        <span className="mb-5">My Skills</span>
        <MySkills />
      </div>
      <div className="h-20"></div>
      <div className="font-bold px-5 sm:px-40 font-montserrat text-white-col flex flex-col">
        <span className="text-5xl mb-5">Portofolio</span>
        <span className="text-3xl mb-5 text-gold-col">Motion Graphic</span>
      </div>
      <div className="flex mx-5 sm:mx-40 gap-6">

        {videos.length > 0 ? (
          <>
            {videos.map((video, index) => (
              // <div key={index}>
              <video key={index} className="rounded-lg hover:bg-third-col" controls>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              // </div>
            ))}
          </>
        ) : (
          <div className="h-30 w-72 bg-scnd-col rounded-lg hover:bg-third-col"></div>
        )}

      </div>

      <div className="h-40"></div>
      <div>
        {showWarning && <WarningModal onClose={handleCloseWarning} />}
        {/* Your other components go here */}
      </div>
    </div>


  )
}

export default App
