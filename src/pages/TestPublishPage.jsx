export default function TestPublishPage() {
  return (
    <>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="" content="" />
      <title>KTA</title>
      <link type="text/css" rel="stylesheet" href="common/css/kta.v1.css" />
      {/*[if lt IE 9]>
		<link rel="stylesheet" href="common/css/old.css">
	<![endif]*/}
      <div className="wrap">
        {/* header */}
        <div className="header">
          {/* 로고 */}
          <h1>
            <a href="">
              <img
                src="img/logo.png"
                alt="KTA - 화물공제분담금 신용카드 수납시스템"
              />
            </a>
          </h1>
          {/* //로고 */}
          {/* 메뉴 */}
          <div className="gnbs">
            <ul>
              <li>
                <a href="">차주정보</a>
              </li>
              <li>
                <a href="">수납관리</a>
              </li>
              <li>
                <a href="">정산관리</a>
              </li>
              <li>
                <a href="">커뮤니티</a>
              </li>
              <li>
                <a href="">통계</a>
              </li>
              <li>
                <a href="">시스템관리</a>
              </li>
            </ul>
          </div>
          <div className="depths">
            <strong>
              <img
                src="img/txt_allmenu.png"
                alt="전체메뉴 전체시스템 메뉴를 한눈에 보실 수 있습니다."
              />
            </strong>
            <ul>
              <li className="first">
                <ul>
                  <li>
                    <a href="">조합원 조회</a>
                  </li>
                  <li>
                    <a href="">조합원 차량정보조회</a>
                  </li>
                  <li>
                    <a href="">위수탁차주 정보조회</a>
                  </li>
                </ul>
              </li>
              <li className="second">
                <ul>
                  <li>
                    <a href="">전체수납건 조회</a>
                  </li>
                  <li>
                    <a href="">통합계약분담금 조회</a>
                  </li>
                  <li>
                    <a href="">종사자재해 조회</a>
                  </li>
                  <li>
                    <a href="">적재물분담금 조회</a>
                  </li>
                  <li>
                    <a href="">추징분담금 조회</a>
                  </li>
                  <li>
                    <a href="">가입금 수납</a>
                  </li>
                  <li>
                    <a href="">자부담금 수납</a>
                  </li>
                  <li>
                    <a href="">수납내역 조회</a>
                  </li>
                  <li>
                    <a href="">수납취소 내역</a>
                  </li>
                </ul>
              </li>
              <li className="third">
                <ul>
                  <li>
                    <a href="">정산처리</a>
                  </li>
                  <li>
                    <a href="">정산내역조회</a>
                  </li>
                  <li>
                    <a href="">카드사 매입/입금내역</a>
                  </li>
                </ul>
              </li>
              <li className="fouth">
                <ul>
                  <li>
                    <a href="">공지사항</a>
                  </li>
                  <li>
                    <a href="">자주하는 질문</a>
                  </li>
                  <li>
                    <a href="">자료실</a>
                  </li>
                  <li>
                    <a href="">자유 게시판</a>
                  </li>
                </ul>
              </li>
              <li className="fifth">
                <ul>
                  <li>
                    <a href="">계약종류별 통계</a>
                  </li>
                  <li>
                    <a href="">카드사 입금 통계</a>
                  </li>
                </ul>
              </li>
              <li className="sixth">
                <ul>
                  <li>
                    <a href="">사용자 관리</a>
                  </li>
                  <li>
                    <a href="">권한관리</a>
                  </li>
                  <li>
                    <a href="">게시판 관리</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* //메뉴 */}
          {/* 유틸 */}
          <div className="utils">
            <ul>
              <li className="user">
                <strong>홍길동</strong> (010-0000-0000)
              </li>
              <li>
                <a href="" className="b_type1 red">
                  로그아웃
                </a>
              </li>
              <li>
                <a href="" className="b_type1 blue">
                  비번변경
                </a>
              </li>
              <li>
                <a href="" className="b_type1 navy">
                  사이트맵
                </a>
              </li>
            </ul>
          </div>
          {/* //유틸 */}
        </div>
        {/* //header */}
        {/* content */}
        <div className="content">
          <div className="main_tit">
            <div className="in">
              <p>
                <img
                  src="img/main/txt1.png"
                  alt="화물공제분담금 신용카드수납시스템 - MAIN INFORMATION"
                />
              </p>
            </div>
          </div>
          <div className="main_cols">
            <div className="left_cols left_cols_type2">
              <div className="cols cols1">
                {/* Today 수납정보 */}
                <div className="round_box color3">
                  <strong className="tit">Today 수납정보</strong>
                  <div className="inner">
                    <table className="hor_tb">
                      <colgroup>
                        <col style={{ width: "30%" }} />
                        <col style={{ width: "70%" }} />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>
                            <strong>신규 수납</strong>
                          </th>
                          <td>
                            <strong className="new">9,999</strong> 건
                          </td>
                        </tr>
                        <tr>
                          <th>만기예정 수납건</th>
                          <td>
                            <strong>9,999</strong> 건
                          </td>
                        </tr>
                        <tr>
                          <th>총</th>
                          <td>
                            <strong>9,999</strong> 건
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* //Today 수납정보 */}
              </div>
              <div className="cols cols2">
                {/* 지부정보 */}
                <div className="round_box color2">
                  <strong className="tit">지부정보</strong>
                  <div className="inner">
                    <table className="hor_tb">
                      <colgroup>
                        <col style={{ width: "30%" }} />
                        <col style={{ width: "70%" }} />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>
                            <strong>소속 지부</strong>
                          </th>
                          <td>
                            <strong className="pos">서울지부</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>소속 출장소</th>
                          <td>강남</td>
                        </tr>
                        <tr>
                          <th>성 명(사원번호)</th>
                          <td>홍길동(A0912)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* //지부정보 */}
              </div>
              <div className="cols block">
                {/* 만기예정 대상내역(수납말일기준) */}
                <div className="round_box color1">
                  <strong className="tit">
                    만기예정 대상내역(수납말일기준)
                  </strong>
                  <div className="inner">
                    <table className="ver_tb">
                      <colgroup>
                        <col style={{ width: "13%" }} />
                        <col style={{ width: "29%" }} />
                        <col style={{ width: "29%" }} />
                        <col style={{ width: "29%" }} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>&nbsp;</th>
                          <th>총</th>
                          <th>수납</th>
                          <th>미수납</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>분담금</th>
                          <td>
                            <strong>9,999</strong> 건
                          </td>
                          <td>
                            <strong>9,999</strong> 건
                          </td>
                          <td>
                            <strong>9,999</strong> 건
                          </td>
                        </tr>
                        <tr>
                          <th>재해</th>
                          <td>
                            <strong>9,999</strong> 건
                          </td>
                          <td>
                            <strong>9,999</strong> 건
                          </td>
                          <td>
                            <strong>9,999</strong> 건
                          </td>
                        </tr>
                        <tr>
                          <th>적재물</th>
                          <td>
                            <strong>9,999</strong> 건
                          </td>
                          <td>
                            <strong>9,999</strong> 건
                          </td>
                          <td>
                            <strong>9,999</strong> 건
                          </td>
                        </tr>
                        <tr>
                          <th>가입금</th>
                          <td>
                            <strong>9,999</strong> 건
                          </td>
                          <td>
                            <strong>9,999</strong> 건
                          </td>
                          <td>
                            <strong>9,999</strong> 건
                          </td>
                        </tr>
                        <tr>
                          <th>자부담금</th>
                          <td>
                            <strong>9,999</strong> 건
                          </td>
                          <td>
                            <strong>9,999</strong> 건
                          </td>
                          <td>
                            <strong>9,999</strong> 건
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* //만기예정 대상내역(수납말일기준) */}
              </div>
            </div>
            <div className="right_cols">
              <div className="cols cols3">
                {/* 공지사항 */}
                <div className="round_box color4">
                  <strong className="tit">공지사항</strong>
                  <div className="inner">
                    <ul>
                      <li>
                        <a href="">
                          대형차 속도제한장치 해체' 단속에 교통사고 단속에
                          교통사고단속에 교통사고단속에 교통사고단속에 교통사고
                        </a>
                      </li>
                      <li>
                        <a href="">화물차 '4시간 운전·30분 휴식' 의무화 </a>
                      </li>
                      <li>
                        <a href="">
                          추석 연휴 고속도로 운전 시 졸음운전·핸드폰 사용
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="" className="more">
                    more
                  </a>
                </div>
                {/* //공지사항 */}
                {/* 자료실 */}
                <div className="round_box color4">
                  <strong className="tit">자료실</strong>
                  <div className="inner">
                    <ul>
                      <li className="file">
                        <a href="">개인정보동의서</a>
                      </li>
                      <li className="file">
                        <a href="">
                          공제금청구권리포기약정서[법률비용지원특약용]
                        </a>
                      </li>
                      <li className="file">
                        <a href="">합의서(대물)</a>
                      </li>
                    </ul>
                  </div>
                  <a href="" className="more">
                    more
                  </a>
                </div>
                {/* //자료실 */}
                {/* 자주하는 질문 */}
                <div className="round_box color4">
                  <strong className="tit">자주하는 질문</strong>
                  <div className="inner">
                    <ul>
                      <li className="view">
                        <a href="">인터넷 회원의 대상</a>
                      </li>
                      <li className="view">
                        <a href="">계약/보상조회는 어떻게 이루어지나요?</a>
                      </li>
                      <li className="view">
                        <a href="">회원가입이 이루어지지 않아요?</a>
                      </li>
                    </ul>
                  </div>
                  <a href="" className="more">
                    more
                  </a>
                </div>
                {/* //자주하는 질문 */}
              </div>
            </div>
          </div>
        </div>
        {/* //content */}
        {/* footer */}
        <div className="footer">
          <p>COPYRIGHT(C) KTA. All RIGHTS RESERVED</p>
        </div>
        {/* //footer */}
      </div>
    </>
  );
}
