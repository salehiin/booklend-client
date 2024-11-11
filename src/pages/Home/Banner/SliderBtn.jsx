

const SliderBtn = ({left, right}) => {
    return (
        
            <div className="absolute left-2 lg:left-5 right-2 lg:right-5 top-1/2 flex -translate-y-1/2 transform justify-between ">
                <a href={left} className="btn btn-circle text-orange-600 hover:bg-transparent hover:border-orange-600">❮</a>
                <a href={right} className="btn btn-circle text-orange-600 hover:bg-transparent hover:border-orange-600">❯</a>
            </div>
        
    );
};

export default SliderBtn;