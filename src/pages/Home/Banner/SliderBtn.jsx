

const SliderBtn = ({left, right}) => {
    return (
        
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between ">
                <a href={left} className="btn btn-circle text-[#F2B263] hover:bg-transparent hover:border-[#F2B263]">❮</a>
                <a href={right} className="btn btn-circle text-[#F2B263] hover:bg-transparent hover:border-[#F2B263]">❯</a>
            </div>
        
    );
};

export default SliderBtn;