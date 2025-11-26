import { Globe } from "lucide-react";

interface webIconProps {
  className?: string;
}
const WebIcon = (props: webIconProps) => {
  return (
    <div>
     <Globe className={props.className} />
    </div>
  );
};

export default WebIcon;
