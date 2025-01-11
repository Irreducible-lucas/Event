import { gallery } from "../../assets";
import styles from "../../styles";

const SelectGallery = () => {
  return (
    <div className="border-2 border-gray-800 rounded-xl  flex flex-col items-center justify-center w-full h-60 lg:h-full">
      <img src={gallery} className="w-16 h-16 mb-5 rounded-md" />
      <p className={`${styles} text-xs  text-center text-[#849299]`}>
        Select a single to get more information
      </p>
    </div>
  );
};

export default SelectGallery;
