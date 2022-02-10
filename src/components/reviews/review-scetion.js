import {MdStar} from 'react-icons/md'

function ReviewSection() {

    return(
        <>
        <div className="reviews-container">
            <div className="review-container">
                <div className="review-name">Jody Jodes</div>
                <div className="review-stars">
                    <MdStar className='review-star react-icon' style={{'--icon-size': '1.4'}}/>
                    <MdStar className='review-star react-icon' style={{'--icon-size': '1.4'}}/>
                    <MdStar className='review-star react-icon' style={{'--icon-size': '1.4'}}/>
                    <MdStar className='review-star react-icon' style={{'--icon-size': '1.4'}}/>
                    <MdStar className='review-star react-icon' style={{'--icon-size': '1.4'}}/>
                </div>
                <div className="review-body">
                "Never been happier with a paid job in my life. 5 stars all round."
                </div>
            </div>
        </div>
        </>
    )

}

export default ReviewSection;