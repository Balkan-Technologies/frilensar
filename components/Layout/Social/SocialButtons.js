import React, { useState } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Wrapper = styled.div`
  display: flex;
  justify-content: ${({ alignLeft }) => alignLeft ? 'flex-start' : 'flex-end'};
  padding-left: 15px;
  flex-direction: row-reverse;
  align-items: ${({ displayVertically }) => displayVertically ? 'flex-start' : 'unset'};
  ${breakpoint('desktop')`
    flex-direction: unset;
  `};
`;

const SocialIconsWrapper = styled.div`

`;

const Button = styled.button`
  appearance: none;
  border: none;
  background: transparent;
  padding: 0;
  margin: ${({ displayVertically }) => displayVertically ? '0 0' : '0 10px'};
  outline: none !important;
  display: ${({ displayVertically }) => displayVertically ? 'block' : 'unset'};
  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    rect {
      transition: fill ${({ theme }) => theme.animations.defaultTiming}s ease;
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;
const SocialButton = styled.a`
  margin: ${({ displayVertically }) => displayVertically ? '10px 0' : '0 10px'};
  appearance: none;
  border: none;
  background: transparent;
  padding: 0;
  outline: none !important;
  display: ${({ displayVertically }) => displayVertically ? 'block' : 'unset'};
  &:first-of-type {
    margin-top: 0;
  }
  &:hover {
    rect {
      transition: fill ${({ theme }) => theme.animations.defaultTiming}s ease;
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
  
`;
const SocialShareButtonsWrapper = styled.div`
  display: inline-block;
`;

const Tip = styled.p`
  font-size: 12px;
  font-family: "Averta", sans-serif;
  margin-top: 7px;
  text-align: ${({ displayVertically }) => displayVertically ? 'left' : 'right'};
  padding-left: ${({ displayVertically }) => displayVertically ? '15px' : '0'};
  opacity: ${({ isVisible }) => isVisible ? '1' : '0'};
`;

function Social({ goToComments, articleLink, alignLeft = false, displayVertically = false }) {
  const [socialOpen, toggleSocialOpen] = useState(false);
  const [tipOpen, toggleTipOpen] = useState(false);

  return (
    <div>
      <Wrapper alignLeft={alignLeft} displayVertically={displayVertically}>
        <SocialIconsWrapper onClick={() => toggleSocialOpen(!socialOpen)}>
          {socialOpen && (
            <SocialShareButtonsWrapper>
              <SocialButton href={`https://www.facebook.com/sharer/sharer.php?u=${articleLink}`} target="_blank" displayVertically={displayVertically}>
                <svg width="30px" height="30px" viewBox="0 0 30 30">
                  <g id="BW" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Article_Share_Click" transform="translate(-1065.000000, -209.000000)">
                      <g id="Group-13" transform="translate(1065.000000, 209.000000)">
                        <rect id="Rectangle" fill="#FFFFFF" x="0" y="0" width="30" height="30"></rect>
                        <path d="M18.8952497,9.99001052 L17.4834189,9.99087499 C16.3763153,9.99087499 16.1616375,10.5169077 16.1616375,11.2884511 L16.1616375,12.9908894 L18.8024628,12.9908894 L18.458402,15.6581244 L16.1616375,15.6581244 L16.1616375,22.4999928 L13.408128,22.4999928 L13.408128,15.6581244 L11.1056292,15.6581244 L11.1056292,12.9908894 L13.408128,12.9908894 L13.408128,11.0249305 C13.408128,8.74214169 14.8022515,7.50003602 16.8375124,7.50003602 C17.8124955,7.50003602 18.6506035,7.57221963 18.8952497,7.60492558 L18.8952497,9.99001052 Z" id="Path" fill="#000000"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </SocialButton>
              <SocialButton href={`https://twitter.com/intent/tweet?url=${articleLink}`} target="_blank" displayVertically={displayVertically}>
                <svg width="30px" height="30px" viewBox="0 0 30 30">
                  <g id="BW" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Article_Share_Click" transform="translate(-1115.000000, -209.000000)">
                      <g id="Group-14" transform="translate(1115.000000, 209.000000)">
                        <rect id="Rectangle-Copy" fill="#FFFFFF" x="0" y="0" width="30" height="30"></rect>
                        <path d="M20.9643692,11.9409852 C20.9699883,12.0731057 20.9737344,12.2053703 20.9737344,12.3393638 C20.9737344,16.405304 17.8781956,21.0946888 12.217617,21.0946888 C10.4794471,21.0946888 8.86230363,20.5856142 7.50003602,19.712812 C7.74093623,19.7409362 7.98572657,19.7549983 8.23411888,19.7549983 C9.67591814,19.7549983 11.0025982,19.2637463 12.0562485,18.4378131 C10.7091092,18.4134349 9.57290161,17.5237466 9.18100654,16.3012501 C9.36946196,16.3368665 9.56166344,16.3556256 9.76034848,16.3556256 C10.0407264,16.3556256 10.3126036,16.3181218 10.5712255,16.2478112 C9.16314073,15.9656179 8.10286285,14.7215672 8.10286285,13.2309251 L8.10286285,13.1915915 C8.51723426,13.4221181 8.99255111,13.5608662 9.49697194,13.576859 C8.67096663,13.024748 8.12721221,12.0824709 8.12721221,11.0155653 C8.12721221,10.4512076 8.27907155,9.92243743 8.5444652,9.46786797 C10.0621941,11.3296577 12.3299987,12.5550502 14.8875463,12.6834247 C14.8351015,12.4583732 14.8078706,12.223092 14.8078706,11.9821918 C14.8078706,10.282491 16.1859869,8.90437472 17.8846791,8.90437472 C18.7706213,8.90437472 19.5704042,9.27840399 20.1310159,9.87662029 C20.8322487,9.73873662 21.4912664,9.48285219 22.0857367,9.1302907 C21.8559305,9.84838079 21.3675025,10.4512076 20.7328342,10.8328731 C21.3553998,10.7578079 21.947853,10.5928373 22.5001081,10.348047 C22.0876097,10.9649936 21.565323,11.506875 20.9643692,11.9409852 Z" id="Path" fill="#000000"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </SocialButton>
            </SocialShareButtonsWrapper>
          )}
          <Button displayVertically={displayVertically}>
            {!socialOpen && (
              <svg width="30px" height="30px" viewBox="0 0 30 30">
                <g id="BW" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Article_Share_Hover" transform="translate(-1265.000000, -209.000000)">
                    <g id="Group-16" transform="translate(1265.000000, 209.000000)">
                      <rect id="Rectangle" fill="#000000" x="0" y="0" width="30" height="30"></rect>
                      <path d="M21.8623498,13.6506134 L18.1479963,10.1306737 C18.0560149,10.0436328 17.9472296,10 17.8215048,10 C17.69578,10 17.5868591,10.0436328 17.4951488,10.1306737 C17.4031674,10.2178431 17.3571259,10.3209373 17.3571259,10.4400848 L17.3571259,12.2000385 L15.7321217,12.2000385 C12.2837519,12.2000385 10.1679093,13.1236161 9.3843229,14.9707392 C9.12809634,15.5847774 9,16.3480469 9,17.2600982 C9,18.0208634 9.30714664,19.054406 9.92133827,20.3606298 C9.93577071,20.3928648 9.96104441,20.4476707 9.99743041,20.5255612 C10.0337148,20.6034196 10.066408,20.6721598 10.0953745,20.7318459 C10.1244765,20.7913073 10.1559839,20.8417146 10.1897274,20.8830037 C10.2476943,20.9608621 10.3154522,21 10.3928656,21 C10.4654005,21 10.5223171,20.9770438 10.5634462,20.9312598 C10.6044736,20.885508 10.6250042,20.8280693 10.6250042,20.759586 C10.6250042,20.7182006 10.618906,20.6574871 10.606879,20.5772207 C10.5946826,20.4969543 10.5886182,20.4432721 10.5886182,20.4156925 C10.5643948,20.1041625 10.5523339,19.8221062 10.5523339,19.5701339 C10.5523339,19.1073498 10.5946826,18.6924687 10.6792444,18.3258759 C10.7639418,17.9591546 10.8811969,17.6418454 11.0311452,17.3737234 C11.1810935,17.1054409 11.3745762,16.8741773 11.6115934,16.6792904 C11.8484751,16.4844998 12.1036175,16.3253476 12.376919,16.2015767 C12.6501867,16.0777738 12.9717658,15.9803303 13.3417918,15.9093427 C13.7116822,15.8382588 14.0840798,15.7889431 14.4588827,15.761492 C14.8337872,15.7339124 15.2582228,15.720235 15.7321217,15.720235 L17.3571259,15.720235 L17.3571259,17.4803172 C17.3571259,17.5994647 17.4030319,17.7025589 17.4948778,17.7895998 C17.5868591,17.8766407 17.6956445,17.9202735 17.8213693,17.9202735 C17.9470941,17.9202735 18.0558794,17.8766407 18.1479963,17.7895998 L21.8622143,14.2695317 C21.9540601,14.1824908 22,14.0793966 22,13.9602491 C22,13.8411017 21.9540601,13.7379111 21.8623498,13.6506134 Z" id="Fill-1" fill="#F8F8F8"></path>
                    </g>
                  </g>
                </g>
              </svg>
            )}
            {socialOpen && (
              <svg width="30px" height="30px" viewBox="0 0 30 30">
                <g id="BW" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Article_Share_Click" transform="translate(-1265.000000, -209.000000)">
                    <g id="Group-2" transform="translate(1265.000000, 209.000000)">
                      <rect id="Rectangle" fill="#000000" x="0" y="0" width="30" height="30"></rect>
                      <g id="Group" transform="translate(10.000000, 10.000000)" fill="#FFFFFF" stroke="#FFFFFF">
                        <path d="M-0.90909091,4.54545455 L10.9090909,4.54545455 C11.1601294,4.54545455 11.3636364,4.74896148 11.3636364,5 C11.3636364,5.25103852 11.1601294,5.45454545 10.9090909,5.45454545 L-0.90909091,5.45454545 C-1.16012943,5.45454545 -1.36363636,5.25103852 -1.36363636,5 C-1.36363636,4.74896148 -1.16012943,4.54545455 -0.90909091,4.54545455 Z" id="Rectangle-Copy-4" transform="translate(5.000000, 5.000000) scale(-1, 1) rotate(-45.000000) translate(-5.000000, -5.000000) "></path>
                        <path d="M-0.909090909,4.54545455 L10.9090909,4.54545455 C11.1601294,4.54545455 11.3636364,4.74896148 11.3636364,5 C11.3636364,5.25103852 11.1601294,5.45454545 10.9090909,5.45454545 L-0.909090909,5.45454545 C-1.16012943,5.45454545 -1.36363636,5.25103852 -1.36363636,5 C-1.36363636,4.74896148 -1.16012943,4.54545455 -0.909090909,4.54545455 Z" id="Rectangle-Copy-6" transform="translate(5.000000, 5.000000) rotate(-45.000000) translate(-5.000000, -5.000000) "></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            )}
          </Button>
        </SocialIconsWrapper>
        <Button onClick={goToComments} onMouseOver={() => {
          toggleTipOpen(true);
          toggleSocialOpen(false);
        }} onMouseOut={() => toggleTipOpen(false)}>
          <svg width="30px" height="30px" viewBox="0 0 30 30">
            <g id="BW" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Article_Share_Click" transform="translate(-1315.000000, -209.000000)">
                <g id="Group-12" transform="translate(1315.000000, 209.000000)">
                  <rect id="Rectangle-Copy-7" fill="#000000" x="0" y="0" width="30" height="30"></rect>
                  <path d="M21.1295818,12.2804789 C20.5491675,11.5764292 19.7608041,11.0204122 18.764695,10.6122273 C17.7684165,10.2041426 16.6801905,10 15.5001186,10 C14.6198077,10 13.7783899,10.1205461 12.9754925,10.3615381 C12.1726967,10.6026638 11.4810916,10.9284561 10.900779,11.3389818 C10.3203646,11.7495074 9.8584928,12.2375103 9.5150618,12.8032245 C9.1716308,13.3688049 9,13.9619388 9,14.5825257 C9,15.2984461 9.21875643,15.9693247 9.65654033,16.5947268 C10.0941887,17.2198613 10.6926266,17.7450814 11.4519896,18.1698519 C11.3987996,18.3608197 11.3359203,18.5422576 11.2632838,18.7138979 C11.190749,18.8857723 11.1254981,19.026716 11.0673957,19.1365618 C11.0094288,19.2463072 10.9308296,19.3681575 10.8316998,19.5017781 C10.7326038,19.6353988 10.6576974,19.729729 10.606879,19.7845683 C10.5560606,19.8394411 10.4726844,19.9302269 10.3564796,20.0566582 C10.2405458,20.1832233 10.1655039,20.2655157 10.131625,20.3038029 C10.1267464,20.3060098 10.107537,20.327678 10.0736581,20.3681722 C10.0397791,20.4086663 10.0228396,20.4289301 10.0228396,20.4289301 L9.97930517,20.4931991 C9.95508171,20.5291121 9.94424045,20.5518504 9.94661197,20.5611129 C9.94901738,20.5705091 9.94424045,20.5945515 9.93221342,20.6326715 C9.92001699,20.6709587 9.92120276,20.6995487 9.93577071,20.7187759 L9.93577071,20.7258314 C9.95521723,20.8119024 9.99743041,20.8809865 10.0626813,20.9333848 C10.1279322,20.9858834 10.2017883,21.0074178 10.2839448,20.9977541 C10.5984093,20.9595003 10.8740485,20.9072358 11.1110656,20.8403586 C12.3782403,20.5203512 13.4905543,19.9429001 14.448143,19.1074367 C14.8107834,19.1455902 15.1614645,19.1647839 15.4999831,19.1647839 C16.6800549,19.1647839 17.768281,18.9606413 18.7645595,18.5524563 C19.7608041,18.1443717 20.549032,17.5882209 21.1294463,16.884305 C21.709759,16.1805229 22,15.4130067 22,14.5825257 C22,13.751911 21.7098945,12.9845286 21.1295818,12.2804789 Z" id="Fill-1" fill="#F8F8F8"></path>
                </g>
              </g>
            </g>
          </svg>
        </Button>
      </Wrapper>
      <Tip isVisible={tipOpen} displayVertically={displayVertically}>Mergi la comentarii</Tip>
    </div>
  );
}

export default Social;
