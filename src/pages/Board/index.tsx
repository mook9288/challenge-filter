const Board = () => {
  return (
    <div>
      <div className='header'>
        <h1>dashboard</h1>
      </div>
      <div className='container'>
        <div className='page-title'>
          <h2 className='page-title__tit'>들어온 요청</h2>
          <p className='page-title__desc'>
            파트너님에게 딱 맞는 요청서를 찾아보세요.
          </p>
        </div>
        <div className='search-area'>
          <div className='search-area__left'>
            <div className='select'>
              <span className='select__text'>Select</span>
              <ul className='select__menu'>
                <li className='select__menu__item'>
                  <div className='checkbox'>
                    <input type='checkbox' />
                    <label>eeeee</label>
                  </div>
                </li>
                <li className='select__menu__item'>
                  <div className='checkbox checked'>
                    <input type='checkbox' />
                    <label>eeeee</label>
                  </div>
                </li>
                <li className='select__menu__item'>
                  <div className='checkbox disabled'>
                    <input type='checkbox' />
                    <label>eeeee</label>
                  </div>
                </li>
              </ul>
            </div>
            <div className='select'>
              <span className='select__text'>Select</span>
              <ul className='select__menu'>
                <li className='select__menu__item'>eee</li>
                <li className='select__menu__item'>eee</li>
                <li className='select__menu__item'>eee</li>
                <li className='select__menu__item'>eee</li>
              </ul>
            </div>
          </div>
          <div className='search-area__right'>
            <div className='checkbox'>
              <input type='checkbox' />
              <label></label>
            </div>
            <div className='checkbox toggle'>
              <input type='checkbox' />
              <label></label>
            </div>
            <div className='checkbox toggle'>
              <input type='checkbox' />
              <label>상담 중인 요청만 보기</label>
            </div>
          </div>
        </div>
        <div className='card-wrap'>
          <div className='card'>
            <div className='card__content'>
              <strong className='title'>Card Title</strong>
              <span className='client'>Client</span>
              <span>2021.12.12</span>
            </div>
            <div className='card__description'>
              <dl className='request-data'>
                <dt className='request-data__title'>도면개수</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
              <dl className='request-data'>
                <dt className='request-data__title'>총 수량</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
              <dl className='request-data'>
                <dt className='request-data__title'>가공 방식</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
              <dl className='request-data'>
                <dt className='request-data__title'>재료</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
            </div>
            <div className='button-area'>
              <button className='btn btn__primary'>요청 내역 보기</button>
              <button className='btn btn__secondary'>채팅하기</button>
            </div>
          </div>
          <div className='card'>
            <div className='card__content'>
              <strong className='title'>Card Title</strong>
              <span className='client'>Client</span>
              <span>2021.12.12</span>
            </div>
            <div className='card__description'>
              <dl className='request-data'>
                <dt className='request-data__title'>도면개수</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
              <dl className='request-data'>
                <dt className='request-data__title'>총 수량</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
              <dl className='request-data'>
                <dt className='request-data__title'>가공 방식</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
              <dl className='request-data'>
                <dt className='request-data__title'>재료</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
            </div>
            <div className='button-area'>
              <button className='btn btn__primary'>요청 내역 보기</button>
              <button className='btn btn__secondary'>채팅하기</button>
            </div>
          </div>
          <div className='card'>
            <div className='card__content'>
              <strong className='title'>Card Title</strong>
              <span className='client'>Client</span>
              <span>2021.12.12</span>
            </div>
            <div className='card__description'>
              <dl className='request-data'>
                <dt className='request-data__title'>도면개수</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
              <dl className='request-data'>
                <dt className='request-data__title'>총 수량</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
              <dl className='request-data'>
                <dt className='request-data__title'>가공 방식</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
              <dl className='request-data'>
                <dt className='request-data__title'>재료</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
            </div>
            <div className='button-area'>
              <button className='btn btn__primary'>요청 내역 보기</button>
              <button className='btn btn__secondary'>채팅하기</button>
            </div>
          </div>
          <div className='card'>
            <div className='card__content'>
              <strong className='title'>Card Title</strong>
              <span className='client'>Client</span>
              <span>2021.12.12</span>
            </div>
            <div className='card__description'>
              <dl className='request-data'>
                <dt className='request-data__title'>도면개수</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
              <dl className='request-data'>
                <dt className='request-data__title'>총 수량</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
              <dl className='request-data'>
                <dt className='request-data__title'>가공 방식</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
              <dl className='request-data'>
                <dt className='request-data__title'>재료</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
            </div>
            <div className='button-area'>
              <button className='btn btn__primary'>요청 내역 보기</button>
              <button className='btn btn__secondary'>채팅하기</button>
            </div>
          </div>
          <div className='card'>
            <div className='card__content'>
              <strong className='title'>Card Title</strong>
              <span className='client'>Client</span>
              <span>2021.12.12</span>
            </div>
            <div className='card__description'>
              <dl className='request-data'>
                <dt className='request-data__title'>도면개수</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
              <dl className='request-data'>
                <dt className='request-data__title'>총 수량</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
              <dl className='request-data'>
                <dt className='request-data__title'>가공 방식</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
              <dl className='request-data'>
                <dt className='request-data__title'>재료</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
            </div>
            <div className='button-area'>
              <button className='btn btn__primary'>요청 내역 보기</button>
              <button className='btn btn__secondary'>채팅하기</button>
            </div>
          </div>
          <div className='card'>
            <div className='card__content'>
              <strong className='title'>Card Title</strong>
              <span className='client'>Client</span>
              <span>2021.12.12</span>
            </div>
            <div className='card__description'>
              <dl className='request-data'>
                <dt className='request-data__title'>도면개수</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
              <dl className='request-data'>
                <dt className='request-data__title'>총 수량</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
              <dl className='request-data'>
                <dt className='request-data__title'>가공 방식</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
              <dl className='request-data'>
                <dt className='request-data__title'>재료</dt>
                <dd className='desc'>dshfsjkdhfkjdsf</dd>
              </dl>
            </div>
            <div className='button-area'>
              <button className='btn btn__primary'>요청 내역 보기</button>
              <button className='btn btn__secondary'>채팅하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
