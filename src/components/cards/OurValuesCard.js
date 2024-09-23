import { SmallTitle } from "../titles";
import CustomPTag from "../paragraphs/CustomPTag";

export default function OurValuesCard(props) {
  return (
    <div className="max-w-sm p-6 bg-opacity-70 rounded-lg border border-white">
      <SmallTitle role="OurValuesTitle" color="white">
        {props.title}
      </SmallTitle>
      <CustomPTag className="text-base">{props.text}</CustomPTag>
    </div>
  );
}
