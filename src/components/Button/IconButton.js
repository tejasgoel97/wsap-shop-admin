import { TrashIcon, PlusCircleIcon, CloudArrowDownIcon } from "@heroicons/react/20/solid";
import { Button } from "flowbite-react";

export const DeleteIconButton = (props) => {
    const {onClick, className, label, children} = props;
  return (
    <Button color="failure" pill onClick={(e) => onClick()} size={"sm"} className={className}>
      <TrashIcon className={`h-5 w-5 text-white hover:text-primary-lite`} />
      {label}
      {children}
    </Button>
  );
};



export const AddIconButton = (props) => {
  const {onClick, label, children, className} = props;
return (
  <Button pill onClick={(e) => onClick()} size={"sm"}  className={className}>
    <PlusCircleIcon className={`h-5 w-5 text-white hover:text-primary-lite`} />
    {label}
    {children}
  </Button>
);
};


export const SaveIconButton = (props) => {
  const {onClick, label, children, className} = props;
return (
  <Button pill onClick={(e) => onClick()} size={"sm"}  className={className}>
    <CloudArrowDownIcon className={`h-5 w-5 text-white hover:text-primary-lite`} />
    {label}
    {children}
  </Button>
);
};