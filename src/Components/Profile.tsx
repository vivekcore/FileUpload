import { useState } from "react";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState(
  "https://placehold.co/2560x1440"
  );

  const [profileUrl, setProfileUrl] = useState(
    "https://static.vecteezy.com/system/resources/thumbnails/036/594/092/small_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
  );

  const handleimageUpload = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };
  const handleproflephoto = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };
  return (
    <div className="relative w-[94%] ml-[5rem] ">
      <div className="relativee">
        <img
          src={bannerUrl}
          alt="banner Image"
          className="w-full h-60 object-cover"
        />

        <button className=" top-3 right-3 absolute rounded-full bg-gray-800 p-1 text-white hover:bg-gray-600">
          <label
            htmlFor="bannerupload"
            className="cursor-pointer
            "
          >
            <FaCamera size={22} />
          </label>
          <input
            type="file"
            id="bannerupload"
            accept="image/*"
            className="hidden"
            onChange={handleimageUpload}
          />
        </button>
      </div>

      <div className="flex p-2 ml-4 mt-[2rem] ">
        <img
          src={profileUrl}
          alt="channel logo"
          className="w-40 h-40 object-cover rounded-full border-white "
        />
        <button className="absolute bottom-[0] left-23 bg-gray-600 p-1 text-white rounded-full hover:bg-gray-600 ">
          <label htmlFor="profileupload" className="cursor-pointer z-10 ">
            <FaCamera size={22} />
          </label>
          <input
            type="file"
            id="profileupload"
            accept="image/*"
            className="hidden"
            onChange={handleproflephoto}
          />
        </button>

        {/* Channel details */}

        <div className="ml-4 mt-4 items-center">
          <h1 className="text-2xl font-bold ">Channel Name</h1>
          <p className="text-[14px]"><strong>@channel</strong> . 100k subscribers . 160 videos</p>
          <p className="font-light p-2">
            This is a short description of the Youtube channel. It gives an overview of the content and what viewers can expect
          </p>
          <button className="bg-red-600 pb-1.5 text-white rounded-2xl px-3 py-1 hover:bg-red-500 cursor-pointer">
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
//2560x1440 px
