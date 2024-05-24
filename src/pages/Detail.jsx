import "./Detail.css";
import { useLocation, useNavigate } from "react-router-dom";
import favoriteIcon from "../assets/detail-favorite-icon.png";
import backButton from "../assets/detail-back-button.png";

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    productId,
    productTitle,
    productPrice,
    productImage,
    favoriteCount,
    productDescription,
    productTags,
  } = location.state;

  const handleOnClick = () => {
    navigate(`/items`);
  };

  // api로 댓글을 받아오면, 받아온 데이터를 화면에 출력

  return (
    <main className='detail-container'>
      <section className='detail-section-top'>
        <div className='detail-contents-wrap'>
          <div style={productImage} className='detail-img'></div>
          <ul className='detail-contents'>
            <li className='description-wrap'>
              <div className='description-title'>
                <p className='title'>{productTitle}</p>
                <h1 className='price'>{productPrice}</h1>
                <ul className='settings'>
                  <li className='setting'></li>
                  <li className='setting'></li>
                  <li className='setting'></li>
                </ul>
              </div>
              <hr className='description-hr'></hr>
              <ul className='description-introduction'>
                <li className='introduction-desc'>
                  <p className='introduction-title'>상품 소개</p>
                  <p className='introduction-user-desc'>{productDescription}</p>
                </li>
                <li className='introduction-tags'>
                  <p className='introduction-tags-title'>상품 태그</p>
                  <ul className='tag-list'>
                    {productTags.map((tag) => (
                      <li className='tag' key={tag}>
                        <span>#{tag}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
            <li className='favorite-count-wrap'>
              <div className='favorite-background'>
                <div className='favorite-wrap'>
                  <div className='icon-wrap'>
                    <img
                      className='favorite-icon'
                      src={favoriteIcon}
                      alt='하트 아이콘'
                    />
                  </div>
                  <div className='count-wrap'>
                    <span className='favorite-count'>{favoriteCount}</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className='detail-section-bottom'>
        <form className='detail-user-qna-form'>
          <div className='user-qna-input-wrap'>
            <label className='user-qna-label' htmlFor='user-qna'>
              문의하기
            </label>
            <div className='user-qna-input-background'>
              <input
                className='user-qna-input'
                id='user-qna'
                type='text'
                placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
              />
            </div>
          </div>
          <div className='user-qna-button-wrap'>
            <button className='user-qna-button' type='submit'>
              등록
            </button>
          </div>
        </form>
        <div className='detail-user-comments'>
          <ul className='user-comments-list'>
            <li className='user-comment'>
              <h3 className='user-text'>혹시 사용기간이 어떻게 되실까요?</h3>
              <div className='user-profile'>
                <div className='user-profile-img-wrap'>
                  <img
                    className='user-profile-img'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg'
                    alt='유저 프로필 이미지'
                  />
                </div>
                <div className='user-info'>
                  <div className='user-info-wrap'>
                    <p className='user-name'>상큼한 판다</p>
                    <span className='user-time'>1시간 전</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className='user-comments-button-wrap'>
            <button onClick={handleOnClick} className='user-comments-button'>
              <span className='comments-button-text'>
                목록으로 돌아가기
                <img src={backButton} alt='목록으로 돌아가기' />
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Detail;
