interface ButtonContent2Props {
  titleBtn?: string;
  linkBtn?: string;
  btnstyle?: string;
  gmbUrl?: boolean;
}

const ButtonContent: React.FC<ButtonContent2Props> = ({
  titleBtn,
  linkBtn,
  btnstyle,
  gmbUrl,
}) => {
  return (
    <div>
      <a
        href={`${linkBtn ? linkBtn : "/contact"} `}
        
        target={linkBtn && gmbUrl ? "_blank" : "_self"}
        aria-label={titleBtn ? titleBtn : "Contact Us!"}
      >
        <button  className="capitalize bookmarkBtn border-2 border-white">
          <span className="IconContainer">
            <i className="fa fa-phone text-white"></i>
          </span>
          <p className="text ml-2 text-white">
            {titleBtn ? titleBtn : "Contact Us!"}
          </p>
        </button>
      </a>
    </div>
  );
};
export default ButtonContent;
