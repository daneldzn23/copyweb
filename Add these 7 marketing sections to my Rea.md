Add these 7 marketing sections to my React + TypeScript + Vite project, reproducing the code exactly as given. Each is a self-contained component (own .tsx + .css file) under src/components/<Name>/.

## 1. Design tokens (required)

These CSS custom properties must exist (add to your global stylesheet, e.g. src/index.css, inside :root if not already present — skip any that already exist with the same meaning):

```css
:root {
  --font-primary: "Segoe UI", system-ui, Avenir, Helvetica, Arial, sans-serif;
  --font-secondary: Tahoma, system-ui, Avenir, Helvetica, Arial, sans-serif;

  --color-bg-page: #141414;
  --color-bg-gn-high: #2b2b2b;

  --color-border-medium: rgba(243, 245, 249, 0.1);
  --color-border-low: rgba(243, 245, 249, 0.07);

  --color-overlay-lower: rgba(243, 245, 249, 0.05);

  --color-label-primary: #ffffff;
  --color-label-secondary: rgba(255, 255, 255, 0.7);
  --color-label-tertiary: rgba(255, 255, 255, 0.4);
  --color-label-brand-secondary: #1daafb;

  --gradient-brand-a: #2799fa;
  --gradient-brand-b: #0463c8;
}
```

## 2. Assets

Create these SVG files under src/assets/:

**src/assets/logotipo-nelogica-branco.svg.svg**
```svg
<svg width="73" height="24" viewBox="0 0 73 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_61_27542)">
<path d="M72.426 3.96289H68.9308L62.8701 9.19084V5.81349L60.54 7.82392V13.7879C60.54 13.9561 60.7377 14.0487 60.8681 13.9393L72.426 3.96289Z" fill="url(#paint0_linear_61_27542)"/>
<path d="M40.8266 9.78711H40.8603C41.4701 9.78711 41.9664 10.2834 41.9664 10.8933C41.9664 11.5031 41.4701 11.9994 40.8603 11.9994H40.8266C40.2168 11.9994 39.7205 11.5031 39.7205 10.8933C39.7205 10.2834 40.2125 9.78711 40.8266 9.78711Z" fill="white"/>
<path d="M39.9053 13.1699H41.7811V20.627H39.9053V13.1699Z" fill="white"/>
<path d="M55.4843 20.0347C55.4801 19.9968 55.438 19.98 55.4086 20.0094C55.2067 20.2239 54.9249 20.4132 54.5506 20.5857C54.1384 20.7749 53.6758 20.8717 53.1668 20.8717C52.8598 20.8717 52.5528 20.8254 52.2542 20.7287C51.9513 20.6319 51.678 20.4889 51.4256 20.2912C51.1774 20.0936 50.9756 19.8412 50.8199 19.5342C50.6643 19.2271 50.5886 18.8654 50.5886 18.4533C50.5886 18.0285 50.6685 17.6499 50.8284 17.3177C50.9882 16.9854 51.2111 16.7036 51.4971 16.4765C51.7831 16.2494 52.128 16.0769 52.5318 15.9591C52.9355 15.8414 53.3814 15.7825 53.8692 15.7825C54.0164 15.7825 54.1805 15.7867 54.3613 15.7909C54.5422 15.7951 54.7146 15.8035 54.8871 15.8161C55.0763 15.8288 55.274 15.8372 55.4759 15.8498V15.6731C55.4759 15.303 55.3287 15.0086 55.0301 14.7983C54.7314 14.588 54.3445 14.4787 53.8692 14.4787C53.3393 14.4787 52.9145 14.546 52.5948 14.6848C52.2752 14.8235 51.9976 14.9708 51.7537 15.1306L50.8957 13.8562C51.0429 13.751 51.2153 13.6417 51.4046 13.5281C51.5938 13.4146 51.8167 13.3178 52.0733 13.2253C52.3299 13.137 52.6243 13.0613 52.9565 13.0024C53.2888 12.9435 53.68 12.9141 54.1258 12.9141C54.6011 12.9141 55.0343 12.9814 55.4212 13.1117C55.8082 13.2463 56.1404 13.4314 56.4138 13.6669C56.6914 13.9067 56.9017 14.1927 57.0489 14.5249C57.1961 14.8572 57.2718 15.2231 57.2718 15.6143V20.6193H55.5222L55.4843 20.0347ZM55.4801 17.263C55.2908 17.2504 55.1016 17.242 54.9249 17.2293C54.7777 17.2167 54.6221 17.2125 54.4539 17.2041C54.2898 17.1999 54.1468 17.1957 54.0333 17.1957C53.4276 17.1957 53.0028 17.3135 52.7589 17.5532C52.5149 17.7929 52.393 18.0663 52.393 18.3733C52.393 18.693 52.5065 18.9411 52.7336 19.122C53.0028 19.3365 53.4276 19.4248 54.008 19.3828C54.3781 19.3155 54.6852 19.1809 54.9375 18.979C55.0974 18.8528 55.2277 18.7014 55.3287 18.5332C55.4296 18.3649 55.4801 18.1841 55.4801 17.9906V17.263Z" fill="white"/>
<path d="M0 10.0254H2.01884L7.15847 17.5666V10.0254H9.11422V20.6285H7.14164L1.95575 12.999V20.6285H0V10.0254Z" fill="white"/>
<path d="M17.6775 19.5549L17.4168 19.8157C17.2738 19.9587 17.0677 20.1101 16.7943 20.2699C16.5251 20.4297 16.1802 20.5727 15.7596 20.6989C15.3391 20.8251 14.8386 20.8882 14.2581 20.8882C13.6651 20.8882 13.1225 20.7872 12.6347 20.5854C12.1468 20.3835 11.7304 20.1059 11.3855 19.7484C11.0406 19.3951 10.7756 18.9661 10.5906 18.4698C10.4055 17.9735 10.313 17.4183 10.313 16.8169C10.313 16.2659 10.4055 15.7528 10.5906 15.2817C10.7756 14.8106 11.0364 14.3984 11.3687 14.0494C11.7009 13.7003 12.1005 13.4227 12.5632 13.2208C13.0258 13.0189 13.5347 12.918 14.0983 12.918C14.7755 12.918 15.3517 13.0441 15.8227 13.2923C16.2938 13.5404 16.6723 13.8685 16.9583 14.2723C17.2443 14.676 17.4504 15.1303 17.5808 15.6392C17.707 16.1481 17.7701 16.6696 17.7701 17.1996V17.4688H12.2014C12.2014 17.7464 12.2603 17.9945 12.3865 18.2174C12.5085 18.4403 12.6683 18.6296 12.8618 18.7894C13.0594 18.9492 13.2824 19.0712 13.5305 19.1553C13.7787 19.2395 14.0268 19.2815 14.2708 19.2815C14.6325 19.2815 14.9479 19.2479 15.2171 19.1764C15.4863 19.1091 15.7176 19.0292 15.9111 18.9366C16.1003 18.8483 16.2602 18.7516 16.3821 18.6506C16.5041 18.5497 16.5966 18.4698 16.6597 18.4025L17.6775 19.5549ZM15.848 16.1187C15.848 15.9294 15.8101 15.7359 15.7386 15.5467C15.6629 15.3574 15.5536 15.185 15.4106 15.0293C15.2676 14.8779 15.0825 14.7475 14.8596 14.6466C14.6367 14.5457 14.3843 14.4952 14.0941 14.4952C13.7871 14.4952 13.5137 14.5457 13.274 14.6466C13.0342 14.7475 12.8365 14.8737 12.6767 15.0293C12.5169 15.185 12.3949 15.3574 12.3108 15.5467C12.2267 15.7359 12.1846 15.9294 12.1846 16.1187H15.848Z" fill="white"/>
<path d="M18.9436 10.0254H20.8194V20.6285H18.9436V10.0254Z" fill="white"/>
<path d="M21.9927 16.8968C21.9927 16.3542 22.0894 15.8453 22.2871 15.3616C22.4848 14.8779 22.7582 14.4573 23.1072 14.0956C23.4563 13.7339 23.8769 13.4479 24.3732 13.2376C24.8695 13.0273 25.4079 12.918 26.0051 12.918C26.5982 12.918 27.1407 13.0231 27.637 13.2376C28.1333 13.4521 28.5497 13.7381 28.903 14.0956C29.2521 14.4573 29.5255 14.8779 29.7231 15.3616C29.9208 15.8453 30.0176 16.3542 30.0176 16.8968C30.0176 17.4393 29.9208 17.9482 29.7231 18.4319C29.5255 18.9156 29.2521 19.3404 28.903 19.7063C28.5539 20.0722 28.1333 20.3624 27.637 20.5727C27.1449 20.783 26.5982 20.8924 26.0051 20.8924C25.4121 20.8924 24.8695 20.7872 24.3732 20.5727C23.8811 20.3624 23.4605 20.0722 23.1072 19.7063C22.7582 19.3404 22.4848 18.9156 22.2871 18.4319C22.0936 17.9482 21.9927 17.4351 21.9927 16.8968ZM26.0051 19.2647C26.3668 19.2647 26.6781 19.1932 26.943 19.0502C27.208 18.9072 27.4267 18.7179 27.6034 18.4866C27.78 18.2553 27.9062 17.9987 27.9945 17.7211C28.0786 17.4435 28.1207 17.1701 28.1207 16.8926C28.1207 16.6276 28.0786 16.3542 27.9945 16.0724C27.9104 15.7906 27.78 15.5383 27.6034 15.3069C27.4267 15.0798 27.208 14.8947 26.943 14.7517C26.6781 14.6087 26.3668 14.5372 26.0051 14.5372C25.6434 14.5372 25.3322 14.6087 25.0672 14.7517C24.8022 14.8947 24.5835 15.0798 24.4069 15.3069C24.2302 15.534 24.104 15.7906 24.0157 16.0724C23.9316 16.3542 23.8895 16.6276 23.8895 16.8926C23.8895 17.1701 23.9316 17.4435 24.0157 17.7211C24.0998 17.9987 24.2302 18.2511 24.4069 18.4866C24.5835 18.7179 24.8022 18.9072 25.0672 19.0502C25.328 19.1932 25.6434 19.2647 26.0051 19.2647Z" fill="white"/>
<path d="M32.5119 21.8422C32.8105 22.0441 33.1301 22.1913 33.475 22.2796C33.8199 22.3679 34.2237 22.4142 34.6905 22.4142C35.1784 22.4142 35.5864 22.267 35.9145 21.9684C36.2425 21.6697 36.4065 21.2576 36.4065 20.7276V19.9159C36.15 20.1304 35.8724 20.2986 35.5696 20.4332C35.2667 20.5678 34.8672 20.6309 34.3667 20.6309C33.8241 20.6309 33.3446 20.5426 32.9283 20.3617C32.5077 20.1808 32.1502 19.9285 31.8557 19.6046C31.5571 19.2808 31.3342 18.898 31.1786 18.4606C31.023 18.019 30.9473 17.5353 30.9473 17.0054C30.9473 16.4544 31.044 15.9329 31.2417 15.445C31.4394 14.9571 31.7169 14.5323 32.0829 14.1706C32.4488 13.8089 32.8904 13.5271 33.4119 13.321C33.9335 13.1149 34.5139 13.0098 35.1616 13.0098C35.8093 13.0098 36.4065 13.0644 36.9491 13.1696C37.4959 13.2747 37.9375 13.3883 38.2782 13.5019V20.7571C38.2782 21.2786 38.1899 21.737 38.009 22.1408C37.8281 22.5446 37.58 22.881 37.2603 23.1586C36.9407 23.4362 36.5664 23.6423 36.129 23.7853C35.6957 23.9283 35.2205 23.9998 34.7116 23.9998C34.3204 23.9998 33.9713 23.983 33.6685 23.9451C33.3657 23.9073 33.0965 23.8568 32.8568 23.7937C32.617 23.7306 32.4025 23.6507 32.2048 23.554C32.0072 23.4573 31.8263 23.3479 31.6539 23.2217L32.5119 21.8422ZM36.4065 14.7973C36.2593 14.7426 36.1037 14.7047 35.9439 14.6795C35.7841 14.6543 35.5359 14.6375 35.1952 14.6375C34.8125 14.6375 34.4802 14.7005 34.1942 14.8267C33.9082 14.9529 33.6643 15.1253 33.4624 15.3356C33.2605 15.5459 33.1091 15.7941 33.0082 16.0759C32.9072 16.3577 32.8568 16.6521 32.8568 16.9591C32.8568 17.5311 32.9998 18.0148 33.2858 18.406C33.5718 18.7971 34.0344 18.9948 34.6695 18.9948C35.2415 18.9948 35.6747 18.8728 35.9649 18.6289C36.2551 18.3849 36.4023 17.998 36.4023 17.468L36.4065 14.7973Z" fill="white"/>
<path d="M49.8738 19.6477C49.5247 20.0179 49.1083 20.3165 48.6331 20.5394C48.1578 20.7623 47.5984 20.8717 46.9633 20.8717C46.3282 20.8717 45.7604 20.7749 45.2599 20.5857C44.7594 20.3964 44.343 20.123 44.0023 19.7739C43.6617 19.4248 43.4009 19.0042 43.2243 18.5163C43.0434 18.0285 42.9551 17.4859 42.9551 16.8929C42.9551 16.3503 43.0518 15.8414 43.2495 15.3577C43.4472 14.874 43.7206 14.4534 44.0696 14.0917C44.4187 13.73 44.8393 13.444 45.3356 13.2337C45.8277 13.0234 46.3703 12.9141 46.9675 12.9141C47.5732 12.9141 48.1241 13.0234 48.6204 13.2421C49.1167 13.4608 49.5415 13.7552 49.8948 14.1254L48.7004 15.3325C48.4901 15.0885 48.2377 14.8993 47.9517 14.7605C47.6657 14.6217 47.3376 14.5544 46.9633 14.5544C46.6016 14.5544 46.2904 14.6217 46.0254 14.752C45.7604 14.8866 45.5417 15.0549 45.3651 15.2694C45.1884 15.4797 45.0622 15.732 44.9739 16.018C44.8898 16.304 44.8477 16.5942 44.8477 16.8929C44.8477 17.1789 44.8898 17.4607 44.9739 17.734C45.058 18.0116 45.1884 18.2598 45.3651 18.4827C45.5417 18.7056 45.7604 18.8865 46.0254 19.0253C46.2904 19.1641 46.6016 19.2313 46.9633 19.2313C47.3334 19.2313 47.6741 19.1598 47.9811 19.0168C48.2882 18.8738 48.5489 18.6804 48.7592 18.4364L49.8738 19.6477Z" fill="white"/>
<path d="M60.9943 20.0501C60.9186 19.9282 60.8513 19.8398 60.8008 19.7894C60.7714 19.7599 60.7335 19.7389 60.6873 19.7179C60.8008 19.7094 60.8934 19.6716 60.9607 19.6001C61.028 19.5286 61.0616 19.4445 61.0616 19.3477C61.0616 19.2804 61.0406 19.2174 61.0027 19.1543C60.9607 19.0954 60.906 19.0491 60.8387 19.0281C60.7672 19.0029 60.6578 18.9902 60.5022 18.9902H60.0942C60.069 18.9902 60.0522 19.0113 60.0522 19.0323V20.3025H60.2625V19.7431H60.3887C60.4644 19.7431 60.519 19.7599 60.5569 19.7894C60.6116 19.8314 60.6873 19.9324 60.7798 20.0964L60.8976 20.3025H61.1583L60.9943 20.0501ZM60.519 19.5664H60.2625V19.1669H60.5022C60.6074 19.1669 60.6789 19.1753 60.7167 19.1921C60.7546 19.2047 60.784 19.23 60.805 19.2594C60.8261 19.2889 60.8387 19.3267 60.8387 19.3646C60.8387 19.4277 60.8177 19.4739 60.7714 19.5118C60.7251 19.5454 60.641 19.5664 60.519 19.5664Z" fill="white"/>
<path d="M60.5398 18.638C61.095 18.638 61.5493 19.0923 61.5493 19.6474C61.5493 20.2026 61.095 20.6569 60.5398 20.6569C59.9847 20.6569 59.5304 20.2026 59.5304 19.6474C59.5304 19.0923 59.9847 18.638 60.5398 18.638ZM60.5398 18.4277C59.8627 18.4277 59.3159 18.9745 59.3159 19.6517C59.3159 20.3288 59.8627 20.8756 60.5398 20.8756C61.217 20.8756 61.7638 20.3288 61.7638 19.6517C61.7638 18.9745 61.217 18.4277 60.5398 18.4277Z" fill="white"/>
<path d="M53.7811 10.0237H57.2762L63.3369 4.79579V8.17314L65.667 6.16272V0.198729C65.667 0.0304929 65.4693 -0.0620362 65.3389 0.0473176L53.7811 10.0237Z" fill="url(#paint1_linear_61_27542)"/>
</g>
<defs>
<linearGradient id="paint0_linear_61_27542" x1="60.5396" y1="8.9739" x2="72.426" y2="8.9739" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DAAFB"/>
<stop offset="1" stop-color="#106CC9"/>
</linearGradient>
<linearGradient id="paint1_linear_61_27542" x1="53.7806" y1="5.01194" x2="65.667" y2="5.01194" gradientUnits="userSpaceOnUse">
<stop stop-color="#179016"/>
<stop offset="1" stop-color="#8AE12B"/>
</linearGradient>
<clipPath id="clip0_61_27542">
<rect width="72.4258" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
```

**src/assets/ic-close.svg**
```svg
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 9.0625L5.56437 11.4792C5.41034 11.6319 5.23611 11.7083 5.04166 11.7083C4.84722 11.7083 4.67361 11.6319 4.52083 11.4792C4.36805 11.3264 4.29166 11.1528 4.29166 10.9583C4.29166 10.7639 4.36805 10.5897 4.52083 10.4356L6.9375 8L4.52083 5.58521C4.36805 5.43118 4.29166 5.25694 4.29166 5.0625C4.29166 4.86806 4.36805 4.69444 4.52083 4.54167C4.67361 4.38889 4.84722 4.3125 5.04166 4.3125C5.23611 4.3125 5.41034 4.38889 5.56437 4.54167L8 6.95833L10.4148 4.54167C10.5688 4.38889 10.7431 4.3125 10.9375 4.3125C11.1319 4.3125 11.3056 4.38889 11.4583 4.54167C11.6111 4.69444 11.6875 4.86806 11.6875 5.0625C11.6875 5.25694 11.6111 5.43118 11.4583 5.58521L9.04166 8L11.4583 10.4356C11.6111 10.5897 11.6875 10.7639 11.6875 10.9583C11.6875 11.1528 11.6111 11.3264 11.4583 11.4792C11.3056 11.6319 11.1319 11.7083 10.9375 11.7083C10.7431 11.7083 10.5688 11.6319 10.4148 11.4792L8 9.0625Z" fill="#FF6D63"/>
</svg>
```

**src/assets/ic-checkmark.svg**
```svg
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.33335 9.60419L11.4167 4.52085C11.5695 4.36808 11.7465 4.29169 11.9479 4.29169C12.1493 4.29169 12.3264 4.36808 12.4792 4.52085C12.632 4.67363 12.7084 4.85071 12.7084 5.0521C12.7084 5.25349 12.632 5.43058 12.4792 5.58335L6.85419 11.2084C6.70141 11.3611 6.52433 11.4375 6.32294 11.4375C6.12155 11.4375 5.94446 11.3611 5.79169 11.2084L3.52085 8.93752C3.36808 8.78474 3.29169 8.60766 3.29169 8.40627C3.29169 8.20488 3.36808 8.0278 3.52085 7.87502C3.67363 7.72224 3.85071 7.64585 4.0521 7.64585C4.25349 7.64585 4.43058 7.72224 4.58335 7.87502L6.33335 9.60419Z" fill="#9AD994"/>
</svg>
```

**src/assets/ic-comparador_de_estrategias.svg**
```svg
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3544_4366)">
<mask id="path-1-inside-1_3544_4366" fill="white">
<path d="M0 0H16V16H2C0.895431 16 0 15.1046 0 14V0Z"/>
</mask>
<path d="M0 0H16H0ZM16 17H2C0.343146 17 -1 15.6569 -1 14H1C1 14.5523 1.44772 15 2 15H16V17ZM2 17C0.343146 17 -1 15.6569 -1 14V0H1V14C1 14.5523 1.44772 15 2 15V17ZM16 0V16V0Z" fill="#DFDFDF" mask="url(#path-1-inside-1_3544_4366)"/>
<path d="M11.0674 3.94434L16 2.14941V3.21387L10.9336 5.05664L6.5 2.10156L2 5.10059V3.89844L6.5 0.899414L11.0674 3.94434Z" fill="#FF7373"/>
<path d="M16 7H11.25L6.55371 13.2607L2 8.70703V7.29297L6.44629 11.7393L10.75 6H16V7Z" fill="#FFBB00"/>
<path d="M10.918 11.5977L16 9.64258V10.7139L10.75 12.7334L6.37598 9.33105L2 13.707V12.293L6.29297 8L10.918 11.5977Z" fill="#00CB8D"/>
</g>
<defs>
<clipPath id="clip0_3544_4366">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
```

**src/assets/ic-carteira.svg**
```svg
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.18976 4.01128H13.6068V4.01428C13.9619 4.00047 14.308 4.12812 14.5692 4.36921C14.8303 4.61031 14.9852 4.94515 14.9998 5.30028V12.7143C14.9852 13.0694 14.8303 13.4043 14.5692 13.6453C14.308 13.8864 13.9619 14.0141 13.6068 14.0003H2.74976C2.29099 14.0048 1.84914 13.8272 1.52109 13.5065C1.19304 13.1858 1.00556 12.748 0.999756 12.2893V3.71528C1.00477 3.256 1.1919 2.81749 1.52004 2.49611C1.84817 2.17472 2.29047 1.99675 2.74976 2.00128H12.8078C12.922 2.00128 13.0298 1.99758 13.1304 1.99413C13.6683 1.97567 13.9998 1.9643 13.9998 2.56328C13.9848 2.75028 13.8478 3.00028 13.6068 3.00028H3.23476C2.99376 3.00028 2.82876 3.27028 2.82876 3.51128C2.82876 3.75228 2.94776 4.01128 3.18976 4.01128ZM11.9998 10C12.552 10 12.9998 9.55228 12.9998 9C12.9998 8.44772 12.552 8 11.9998 8C11.4475 8 10.9998 8.44772 10.9998 9C10.9998 9.55228 11.4475 10 11.9998 10Z" fill="url(#paint0_linear_275_15675)"/>
<defs>
<linearGradient id="paint0_linear_275_15675" x1="7.99976" y1="1.98828" x2="7.99976" y2="14.0013" gradientUnits="userSpaceOnUse">
<stop stop-color="#DFDFDF"/>
<stop offset="1" stop-color="#B1B1B1"/>
</linearGradient>
</defs>
</svg>
```

**src/assets/ic-relatorio-performance.svg**
```svg
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_220_14467)">
<path d="M12.0002 0H16.0002V14.4C16.0002 14.8243 15.8317 15.2313 15.5316 15.5314C15.2316 15.8314 14.8246 16 14.4002 16H12.0002V0Z" fill="url(#paint0_linear_220_14467)"/>
<path d="M10.0002 7H6.00024V16H10.0002V7Z" fill="url(#paint1_linear_220_14467)"/>
<path d="M4.00024 16H1.60024C1.1759 16 0.768931 15.8314 0.468873 15.5314C0.168815 15.2313 0.000244141 14.8243 0.000244141 14.4V11H4.00024V16Z" fill="url(#paint2_linear_220_14467)"/>
<path d="M8.49953 3.07764e-07C8.24409 0.000349396 7.99298 0.0659223 7.76999 0.190504C7.54699 0.315086 7.35951 0.494549 7.2253 0.711885C7.09109 0.92922 7.01461 1.17723 7.0031 1.4324C6.99159 1.68758 7.04543 1.94146 7.15953 2.17L2.61953 5.51C2.3871 5.25044 2.07106 5.08055 1.72635 5.02985C1.38165 4.97915 1.03007 5.05085 0.732752 5.23249C0.43543 5.41413 0.211164 5.69421 0.0989396 6.02406C-0.0132844 6.35391 -0.00636869 6.71265 0.118485 7.03793C0.243338 7.3632 0.478233 7.63444 0.782334 7.80448C1.08643 7.97453 1.44051 8.03262 1.78301 7.96868C2.1255 7.90473 2.43476 7.72278 2.65701 7.45446C2.87926 7.18614 3.00046 6.84841 2.99953 6.5C2.99982 6.3047 2.96247 6.11117 2.88953 5.93L7.45953 2.58C7.63632 2.75041 7.85225 2.8748 8.08835 2.94227C8.32445 3.00974 8.5735 3.01821 8.81364 2.96695C9.05377 2.91569 9.27766 2.80625 9.46563 2.64826C9.6536 2.49027 9.79991 2.28855 9.89171 2.0608C9.98351 1.83306 10.018 1.58626 9.99215 1.34208C9.9663 1.09789 9.8809 0.863789 9.74344 0.660318C9.60598 0.456847 9.42068 0.290232 9.20379 0.175101C8.98691 0.0599694 8.74508 -0.000156971 8.49953 3.07764e-07Z" fill="url(#paint3_linear_220_14467)"/>
</g>
<defs>
<linearGradient id="paint0_linear_220_14467" x1="8.00024" y1="0" x2="8.00024" y2="16" gradientUnits="userSpaceOnUse">
<stop stop-color="#DFDFDF"/>
<stop offset="1" stop-color="#B1B1B1"/>
</linearGradient>
<linearGradient id="paint1_linear_220_14467" x1="8.00024" y1="0" x2="8.00024" y2="16" gradientUnits="userSpaceOnUse">
<stop stop-color="#DFDFDF"/>
<stop offset="1" stop-color="#B1B1B1"/>
</linearGradient>
<linearGradient id="paint2_linear_220_14467" x1="8.00024" y1="0" x2="8.00024" y2="16" gradientUnits="userSpaceOnUse">
<stop stop-color="#DFDFDF"/>
<stop offset="1" stop-color="#B1B1B1"/>
</linearGradient>
<linearGradient id="paint3_linear_220_14467" x1="5.00003" y1="0.647513" x2="5.00003" y2="6.32325" gradientUnits="userSpaceOnUse">
<stop stop-color="#00F6B7"/>
<stop offset="0.93" stop-color="#00CB8D"/>
</linearGradient>
<clipPath id="clip0_220_14467">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
```

**src/assets/ic-ranking_de_moedas.svg**
```svg
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_329_38510)">
<path d="M14.9995 7H15.9993L13.3327 4L10.666 7H11.7995V16H14.9995V7Z" fill="url(#paint0_linear_329_38510)"/>
<path d="M9.60063 13.0005H10.6673L8.00065 9.90039L5.33398 13.0005H6.40063V16.0005H9.60063V13.0005Z" fill="url(#paint1_linear_329_38510)"/>
<path d="M2.66667 12.0996L0 14.9995H5.33333L2.66667 12.0996Z" fill="url(#paint2_linear_329_38510)"/>
<path d="M4.26665 14.9996H1.06665V15.9996H4.26665V14.9996Z" fill="url(#paint3_linear_329_38510)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 8.9939C6.98528 8.9939 9 6.97918 9 4.4939C9 2.00862 6.98528 -0.00610352 4.5 -0.00610352C2.01472 -0.00610352 0 2.00862 0 4.4939C0 6.97918 2.01472 8.9939 4.5 8.9939Z" fill="url(#paint4_linear_329_38510)"/>
<path d="M4.50005 8.32499C6.61254 8.32499 8.32505 6.61248 8.32505 4.49999C8.32505 2.3875 6.61254 0.674988 4.50005 0.674988C2.38756 0.674988 0.675049 2.3875 0.675049 4.49999C0.675049 6.61248 2.38756 8.32499 4.50005 8.32499Z" fill="url(#paint5_linear_329_38510)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.9999 1.49292H4.9999V2.08176C5.35809 2.10501 5.69852 2.25256 5.95667 2.50149C6.23911 2.77385 6.3999 3.14562 6.3999 3.53567C6.3999 3.66997 6.34447 3.79647 6.24956 3.88799C6.15503 3.97915 6.02906 4.02852 5.8999 4.02852C5.77074 4.02852 5.64478 3.97915 5.55024 3.88799C5.45533 3.79647 5.3999 3.66997 5.3999 3.53567C5.39951 3.41408 5.34934 3.29625 5.25662 3.20684C5.16362 3.11716 5.03541 3.06475 4.89939 3.06424H3.9999C3.86384 3.06424 3.73546 3.11646 3.64246 3.20614C3.54983 3.29546 3.4999 3.41423 3.4999 3.53567C3.4999 3.6571 3.54983 3.77588 3.64246 3.8652C3.73546 3.95488 3.86384 4.0071 3.9999 4.0071H5.0999C5.49428 4.0071 5.8746 4.15806 6.15667 4.43006C6.43911 4.70242 6.5999 5.07419 6.5999 5.46424C6.5999 5.85429 6.43911 6.22606 6.15667 6.49842C5.8746 6.77041 5.49428 6.92138 5.0999 6.92138H4.9999V7.50308H3.9999V6.92138H3.8999C3.50553 6.92138 3.12521 6.77041 2.84313 6.49842C2.56069 6.22606 2.3999 5.85429 2.3999 5.46424C2.3999 5.32993 2.45533 5.20343 2.55024 5.11191C2.64478 5.02075 2.77074 4.97138 2.8999 4.97138C3.02906 4.97138 3.15503 5.02075 3.24956 5.11191C3.34447 5.20343 3.3999 5.32993 3.3999 5.46424C3.40029 5.58583 3.45046 5.70365 3.54319 5.79307C3.63618 5.88274 3.76438 5.93515 3.90038 5.93567H5.0999C5.23596 5.93567 5.36435 5.88345 5.45735 5.79377C5.54998 5.70445 5.5999 5.58568 5.5999 5.46424C5.5999 5.3428 5.54998 5.22403 5.45735 5.13471C5.36435 5.04503 5.23596 4.99281 5.0999 4.99281H3.9999C3.60553 4.99281 3.22521 4.84184 2.94313 4.56984C2.66069 4.29749 2.4999 3.92572 2.4999 3.53567C2.4999 3.14562 2.66069 2.77385 2.94313 2.50149C3.22521 2.22949 3.60553 2.07852 3.9999 2.07852L3.9999 1.49292Z" fill="url(#paint6_linear_329_38510)"/>
</g>
<defs>
<linearGradient id="paint0_linear_329_38510" x1="13.5" y1="12.9841" x2="13.4995" y2="16" gradientUnits="userSpaceOnUse">
<stop stop-color="#00CB8D"/>
<stop offset="1" stop-color="#00CB8D" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_329_38510" x1="8" y1="14" x2="8.00049" y2="16.0005" gradientUnits="userSpaceOnUse">
<stop stop-color="#00CB8D"/>
<stop offset="1" stop-color="#00CB8D" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_329_38510" x1="2.5" y1="15" x2="2.5" y2="16" gradientUnits="userSpaceOnUse">
<stop offset="0.2" stop-color="#00CB8D"/>
<stop offset="1" stop-color="#00CB8D" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_329_38510" x1="2.5" y1="15" x2="2.5" y2="16" gradientUnits="userSpaceOnUse">
<stop offset="0.2" stop-color="#00CB8D"/>
<stop offset="1" stop-color="#00CB8D" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear_329_38510" x1="0" y1="8.9939" x2="0" y2="-0.00610352" gradientUnits="userSpaceOnUse">
<stop stop-color="#EC8E00"/>
<stop offset="1" stop-color="#CC7800"/>
</linearGradient>
<linearGradient id="paint5_linear_329_38510" x1="0.675049" y1="8.32499" x2="0.675049" y2="0.674988" gradientUnits="userSpaceOnUse">
<stop stop-color="#F1C437"/>
<stop offset="1" stop-color="#EFB00F"/>
</linearGradient>
<linearGradient id="paint6_linear_329_38510" x1="4.49995" y1="1.79297" x2="4.49995" y2="7.20313" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="1" stop-color="#663C00"/>
</linearGradient>
<clipPath id="clip0_329_38510">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
```

## 3. Components

### src/components/NelogicaSection/NelogicaSection.tsx
```tsx
import logoNelogica from '../../assets/logotipo-nelogica-branco.svg.svg';
import './NelogicaSection.css';

const STATS = [
  { value: '+60 mil', label: 'ativações' },
  { value: '+1 mil', label: 'estratégias disponíveis' },
  { value: '+3 anos', label: 'de tecnologia Nelogica' },
];

function NelogicaSection() {
  return (
    <section className="nelogica-section">
      <p className="nelogica-section__headline">
        Tecnologia desenvolvida pela
        <img
          src={logoNelogica}
          alt="Nelogica"
          className="nelogica-section__logo"
          width={110}
          height={36}
        />
      </p>
      <p className="nelogica-section__body">
        A mesma tecnologia que já é referência para o trader brasileiro, agora replicando
        estratégias por você.
      </p>

      <div className="nelogica-section__stats">
        {STATS.map((stat) => (
          <div key={stat.label} className="nelogica-section__stat">
            <span className="nelogica-section__stat-divider" aria-hidden="true" />
            <span className="nelogica-section__stat-value">{stat.value}</span>
            <span className="nelogica-section__stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NelogicaSection;
```

### src/components/NelogicaSection/NelogicaSection.css
```css
.nelogica-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 56px 40px;
  border-top: 2px solid rgba(29, 170, 251, 0.25);
  background: radial-gradient(ellipse 800px 400px at top center, rgba(29, 170, 251, 0.12), transparent 65%);
}

.nelogica-section__headline {
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 560px;
  margin: 0;
  text-align: center;
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: var(--color-label-primary);
}

.nelogica-section__logo {
  width: 110px;
  height: auto;
  transform: translateY(3px);
}

.nelogica-section__body {
  max-width: 480px;
  margin: 0 0 16px;
  text-align: center;
  font-family: var(--font-secondary);
  font-size: 13px;
  line-height: 18px;
  color: var(--color-label-secondary);
}

.nelogica-section__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 840px;
  margin-top: 8px;
}

.nelogica-section__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 24px 20px;
  border-radius: 12px;
  border: 1px solid rgba(29, 170, 251, 0.15);
  background: linear-gradient(0deg, rgba(29, 170, 251, 0.1), rgba(29, 170, 251, 0) 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.nelogica-section__stat::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 340px 260px at 22% 89%, rgba(29, 170, 251, 0.14), transparent 70%);
  pointer-events: none;
}

.nelogica-section__stat-divider {
  width: 24px;
  height: 3px;
  border-radius: 2px;
  background: var(--color-label-brand-secondary);
}

.nelogica-section__stat-value {
  font-family: var(--font-primary);
  font-weight: 700;
  font-size: 32px;
  letter-spacing: -0.01em;
  line-height: 1;
  color: var(--color-label-primary);
}

.nelogica-section__stat-label {
  font-family: var(--font-secondary);
  font-size: 13px;
  color: var(--color-label-secondary);
}
```

### src/components/CopyInvestSection/CopyInvestSection.tsx
```tsx
import { useEffect, useRef } from 'react';
import './CopyInvestSection.css';

function CopyInvestSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!('IntersectionObserver' in window)) {
      section.classList.add('is-visible');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('is-visible');
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(section);

    return () => io.disconnect();
  }, []);

  return (
    <section className="ci-section" id="como-funciona" aria-labelledby="ci-title" ref={sectionRef}>
      <div className="ci-inner">
        <h2 className="ci-title" id="ci-title">
          Como funciona o Copy&nbsp;Invest
        </h2>
        <p className="ci-subtitle">
          Três passos para operar com as estratégias de traders profissionais, sem executar
          nada manualmente.
        </p>

        <div className="ci-flow">
          <div className="ci-track" aria-hidden="true">
            <span className="ci-pulse" />
          </div>

          <div className="ci-step">
            <div className="ci-node">
              <span className="ci-step-index" aria-hidden="true">
                1
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 17l4-6 4 3 5-8 3 4" />
                <circle cx="8" cy="11" r="1.4" fill="currentColor" stroke="none" />
                <path d="M3 21h18" />
              </svg>
            </div>
            <h3>Contrate</h3>
            <p>Escolha a estratégia certa para o seu perfil.</p>
          </div>

          <div className="ci-step">
            <div className="ci-node">
              <span className="ci-step-index" aria-hidden="true">
                2
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9.5 14.5l5-5" />
                <path d="M13 6.5l1.5-1.5a4 4 0 015.5 5.5L18.5 12" />
                <path d="M11 17.5L9.5 19a4 4 0 01-5.5-5.5L5.5 12" />
              </svg>
            </div>
            <h3>Conecte</h3>
            <p>Conecte sua conta na corretora parceira.</p>
          </div>

          <div className="ci-step">
            <div className="ci-node">
              <span className="ci-step-index" aria-hidden="true">
                3
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M17 2l4 4-4 4" />
                <path d="M21 6H8a5 5 0 00-5 5" />
                <path d="M7 22l-4-4 4-4" />
                <path d="M3 18h13a5 5 0 005-5" />
              </svg>
            </div>
            <h3>Replique</h3>
            <p>As operações são replicadas automaticamente, em tempo real.</p>
          </div>
        </div>

        <div className="ci-loop">
          <p className="ci-loop-label">E quando quiser, recomece: novas estratégias, mesmo ciclo.</p>
          <br />
          <a className="ci-cta" href="#estrategias">
            Ver estratégias disponíveis
          </a>
          <p className="ci-availability">Disponível em Desktop e Mobile</p>
        </div>
      </div>
    </section>
  );
}

export default CopyInvestSection;
```

### src/components/CopyInvestSection/CopyInvestSection.css
```css
/* ---------- Tokens: casados com o tema da página ---------- */
.ci-section {
  --ci-bg: var(--color-bg-page);
  --ci-surface: rgba(255, 255, 255, 0.028);
  --ci-border: var(--color-border-medium);
  --ci-text: var(--color-label-primary);
  --ci-muted: var(--color-label-secondary);
  --ci-accent: #1daafb;
  --ci-accent-glow: rgba(29, 170, 251, 0.45);
  --ci-font: inherit;
  --ci-radius: 18px;
  --ci-max-w: 1080px;
}

.ci-section {
  background: var(--ci-bg);
  font-family: var(--ci-font);
  color: var(--ci-text);
  padding: 56px 24px;
  position: relative;
  overflow: hidden;
}

.ci-inner {
  max-width: var(--ci-max-w);
  margin: 0 auto;
  position: relative;
}

/* ---------- Cabeçalho ---------- */
.ci-title {
  font-family: var(--font-primary);
  font-size: 20px;
  line-height: 1.4;
  font-weight: 600;
  letter-spacing: normal;
  color: var(--color-label-primary);
  margin: 0 0 4px;
  text-align: center;
}
.ci-subtitle {
  font-family: var(--font-secondary);
  color: var(--ci-muted);
  font-size: 13px;
  line-height: 1.5;
  max-width: 520px;
  margin: 0 auto clamp(48px, 6vw, 72px);
  text-align: center;
}

/* ---------- Fluxo de 3 passos ---------- */
.ci-flow {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0; /* sem gap: mantém os centros dos nós exatamente em 16.66% / 50% / 83.33% (alinhados ao trilho) */
}

/* trilho conector (desktop): atravessa os três nós */
.ci-track {
  position: absolute;
  top: 27px; /* alinhado ao centro dos nós */
  left: calc(16.666%);
  right: calc(16.666%);
  height: 2px;
  background: linear-gradient(90deg, var(--ci-border) 0%, rgba(29, 170, 251, 0.35) 50%, var(--ci-border) 100%);
  border-radius: 2px;
}

/* pulso que viaja pelo trilho, a operação sendo replicada */
.ci-pulse {
  position: absolute;
  top: -3px;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--ci-accent);
  box-shadow: 0 0 12px 3px var(--ci-accent-glow);
  animation: ci-travel 4.5s cubic-bezier(0.45, 0, 0.55, 1) infinite;
}
@keyframes ci-travel {
  0% {
    left: 0%;
    opacity: 0;
  }
  6% {
    opacity: 1;
  }
  46% {
    left: 50%;
  }
  94% {
    opacity: 1;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
}

.ci-step {
  position: relative;
  text-align: center;
  padding: 0 20px;
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.ci-section.is-visible .ci-step {
  opacity: 1;
  transform: none;
}
.ci-section.is-visible .ci-step:nth-child(2) {
  transition-delay: 0.12s;
}
.ci-section.is-visible .ci-step:nth-child(3) {
  transition-delay: 0.24s;
}
.ci-section.is-visible .ci-step:nth-child(4) {
  transition-delay: 0.36s;
}

.ci-node {
  width: 56px;
  height: 56px;
  margin: 0 auto 20px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--ci-bg);
  border: 1px solid var(--ci-border);
  position: relative;
  z-index: 1;
  color: var(--ci-accent);
}
.ci-node::after {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 50%;
  border: 1px solid var(--ci-accent);
  opacity: 0;
  animation: ci-node-blink 4.5s infinite;
}
.ci-step:nth-child(2) .ci-node::after {
  animation-delay: 0s;
}
.ci-step:nth-child(3) .ci-node::after {
  animation-delay: 1.9s;
}
.ci-step:nth-child(4) .ci-node::after {
  animation-delay: 4s;
}
@keyframes ci-node-blink {
  0%,
  100% {
    opacity: 0;
    transform: scale(1);
  }
  4% {
    opacity: 0.9;
    transform: scale(1);
  }
  16% {
    opacity: 0;
    transform: scale(1.45);
  }
}
.ci-node svg {
  width: 22px;
  height: 22px;
}

.ci-step-index {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--ci-accent);
  color: #06251c;
  font-size: 11px;
  font-weight: 700;
  display: grid;
  place-items: center;
}

.ci-step h3 {
  font-size: 19px;
  font-weight: 650;
  letter-spacing: -0.01em;
  margin: 0 0 8px;
}
.ci-step p {
  color: var(--ci-muted);
  font-size: 14.5px;
  line-height: 1.6;
  margin: 0 auto;
  max-width: 240px;
}

/* ---------- CTA ---------- */
.ci-loop {
  position: relative;
  margin-top: clamp(40px, 5vw, 56px);
  text-align: center;
}

.ci-loop-label {
  margin: 0;
  color: var(--ci-muted);
  font-size: 13px;
  letter-spacing: 0.02em;
}

.ci-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  margin-top: 22px;
  padding: 0 20px;
  border: 1px solid #1f72ff;
  border-radius: 6px;
  background: linear-gradient(261deg, var(--gradient-brand-a) 0%, var(--gradient-brand-b) 75%);
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.ci-cta:hover {
  color: #ffffff;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(39, 153, 250, 0.4);
}
.ci-cta:focus-visible {
  outline: 2px solid var(--ci-accent);
  outline-offset: 3px;
}

.ci-availability {
  margin: 12px 0 0;
  font-family: var(--font-secondary);
  font-size: 12px;
  color: var(--color-label-tertiary);
}

/* ---------- Mobile: fluxo vertical ---------- */
@media (max-width: 760px) {
  .ci-flow {
    grid-template-columns: 1fr;
    gap: 36px;
    padding-left: 8px;
  }
  .ci-track {
    top: 28px;
    bottom: 28px;
    left: 35px;
    right: auto;
    width: 2px;
    height: auto;
    background: linear-gradient(180deg, var(--ci-border) 0%, rgba(29, 170, 251, 0.35) 50%, var(--ci-border) 100%);
  }
  .ci-pulse {
    top: 0;
    left: -3px;
    animation-name: ci-travel-v;
  }
  @keyframes ci-travel-v {
    0% {
      top: 0%;
      opacity: 0;
    }
    6% {
      opacity: 1;
    }
    46% {
      top: 50%;
    }
    94% {
      opacity: 1;
    }
    100% {
      top: 100%;
      opacity: 0;
    }
  }
  .ci-step {
    display: grid;
    grid-template-columns: 56px 1fr;
    grid-template-rows: auto;
    gap: 4px 18px;
    text-align: left;
    align-items: start;
  }
  .ci-node {
    grid-column: 1;
    grid-row: 1 / -1;
    margin: 0;
  }
  .ci-step h3,
  .ci-step p {
    grid-column: 2;
  }
  .ci-step p {
    max-width: none;
    margin: 0;
  }
}

/* ---------- Acessibilidade: reduz movimento ---------- */
@media (prefers-reduced-motion: reduce) {
  .ci-pulse,
  .ci-node::after {
    animation: none;
  }
  .ci-pulse {
    display: none;
  }
  .ci-step {
    opacity: 1;
    transform: none;
    transition: none;
  }
  .ci-cta {
    transition: none;
  }
}
```

### src/components/ActivationVideoSection/ActivationVideoSection.tsx
```tsx
import './ActivationVideoSection.css';

function ActivationVideoSection() {
  return (
    <section className="activation-video">
      <h2 className="activation-video__title">Veja como ativar na prática</h2>
      <p className="activation-video__subtitle">
        Do primeiro clique à primeira operação replicada.
      </p>

      <div className="activation-video__frame">
        <iframe
          src="https://www.youtube.com/embed/wByqbPZsSsI?si=RkER9Vwba1QfzXNU"
          title="Veja como ativar na prática"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default ActivationVideoSection;
```

### src/components/ActivationVideoSection/ActivationVideoSection.css
```css
.activation-video {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 40px;
  background: #1e1e1e;
}

.activation-video__title {
  margin: 0 0 4px;
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
  color: var(--color-label-primary);
  text-align: center;
}

.activation-video__subtitle {
  margin: 0 0 32px;
  font-family: var(--font-secondary);
  font-size: 13px;
  line-height: 1.5;
  color: var(--color-label-secondary);
  text-align: center;
}

.activation-video__frame {
  width: 100%;
  max-width: 840px;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  border: 1px solid var(--color-border-low);
  overflow: hidden;
  background: var(--color-bg-gn-high);
}

.activation-video__frame iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}
```

### src/components/ComparisonSection/ComparisonSection.tsx
```tsx
import icClose from '../../assets/ic-close.svg';
import icCheckmark from '../../assets/ic-checkmark.svg';
import './ComparisonSection.css';

const ALONE_ITEMS = [
  'Tempo dedicado ao mercado: alto',
  'Exige conhecimento técnico',
  'Gestão de risco manual',
  'Acompanhamento constante',
  'Execução exige plataforma aberta e monitoramento',
  'Depende de uma única estratégia',
];

const COPY_INVEST_ITEMS = [
  'Tempo dedicado ao mercado: baixo',
  'Não exige conhecimento técnico',
  'Risco parametrizado na estratégia',
  'Acompanhamento se desejar',
  'Execução automática, na nuvem',
  'Acesso a múltiplas estratégias',
];

function ComparisonSection() {
  return (
    <section className="comparison-section">
      <div className="comparison-section__header">
        <h2 className="comparison-section__title">Copy Invest x operar por conta própria</h2>
        <p className="comparison-section__subtitle">
          A diferença não é sobre saber operar. É sobre onde vai o seu tempo.
        </p>
      </div>

      <div className="comparison-section__cards">
        <div className="comparison-section__card">
          <h3 className="comparison-section__card-title">Operar sozinho(a)</h3>
          <ul className="comparison-section__list">
            {ALONE_ITEMS.map((item) => (
              <li key={item} className="comparison-section__item">
                <span className="comparison-section__icon comparison-section__icon--negative">
                  <img src={icClose} alt="" width={16} height={16} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="comparison-section__card comparison-section__card--highlighted">
          <h3 className="comparison-section__card-title comparison-section__card-title--highlighted">
            Copy Invest
          </h3>
          <ul className="comparison-section__list">
            {COPY_INVEST_ITEMS.map((item) => (
              <li key={item} className="comparison-section__item">
                <span className="comparison-section__icon comparison-section__icon--positive">
                  <img src={icCheckmark} alt="" width={16} height={16} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ComparisonSection;
```

### src/components/ComparisonSection/ComparisonSection.css
```css
.comparison-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 56px 40px;
  background: #212121;
}

.comparison-section__header {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 700px;
}

.comparison-section__title {
  margin: 0;
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: var(--color-label-primary);
  text-align: center;
}

.comparison-section__subtitle {
  margin: 0;
  font-family: var(--font-secondary);
  font-size: 13px;
  color: var(--color-label-secondary);
  text-align: center;
}

.comparison-section__cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
  max-width: 900px;
}

.comparison-section__card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid rgba(29, 170, 251, 0.15);
  background: linear-gradient(0deg, rgba(29, 170, 251, 0.1), rgba(29, 170, 251, 0) 100%);
  position: relative;
  overflow: hidden;
}

.comparison-section__card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 340px 260px at 22% 89%, rgba(29, 170, 251, 0.14), transparent 70%);
  pointer-events: none;
}

.comparison-section__card--highlighted {
  border: 1px solid rgba(29, 170, 251, 0.15);
  background: linear-gradient(0deg, rgba(29, 170, 251, 0.1), rgba(29, 170, 251, 0) 100%);
}

.comparison-section__card--highlighted::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 340px 260px at 22% 89%, rgba(29, 170, 251, 0.14), transparent 70%);
  pointer-events: none;
}

.comparison-section__card--highlighted > * {
  position: relative;
}

.comparison-section__card-title {
  margin: 0;
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 16px;
  color: var(--color-label-primary);
}

.comparison-section__card-title--highlighted {
  color: var(--color-label-brand-secondary);
}

.comparison-section__list {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
}

.comparison-section__item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border-low);
  font-family: var(--font-secondary);
  font-size: 13px;
  color: var(--color-label-primary);
}

.comparison-section__item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.comparison-section__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.comparison-section__icon--negative {
  background: rgba(255, 109, 99, 0.15);
}

.comparison-section__icon--positive {
  background: rgba(154, 217, 148, 0.15);
}

@media (max-width: 700px) {
  .comparison-section__cards {
    grid-template-columns: 1fr;
  }
}
```

### src/components/DiversificationSection/DiversificationSection.tsx
```tsx
import icComparador from '../../assets/ic-comparador_de_estrategias.svg';
import icCarteira from '../../assets/ic-carteira.svg';
import icRelatorio from '../../assets/ic-relatorio-performance.svg';
import icRanking from '../../assets/ic-ranking_de_moedas.svg';
import './DiversificationSection.css';

const DIVERSIFICATION_ITEMS = [
  {
    icon: '◆',
    text: 'Menos dependência de uma única tese ou decisão',
  },
  {
    icon: '↝',
    text: 'Resultados descorrelacionados — quando uma estratégia perde, outra pode estar ganhando',
  },
  {
    icon: '≈',
    text: 'Menos oscilação na carteira como um todo',
  },
  {
    icon: '＋',
    text: 'Mais consistência no resultado agregado',
  },
];

function DiversificationSection() {
  return (
    <section className="diversification-section">
      <div className="diversification-section__hook">
        <div className="diversification-section__hook-text">
          Por que diversificar importa
        </div>
      </div>

      <div className="diversification-section__content">
        <div className="diversification-section__text-header">
          <div className="diversification-section__eyebrow">
            No Copy Invest, seu capital pode rodar em várias estratégias ao mesmo tempo.
          </div>
          <p className="diversification-section__note">
            Diversificação não elimina risco. Mas evita que tudo dependa de uma única aposta.
          </p>
        </div>

        <div className="diversification-section__grid">
          {DIVERSIFICATION_ITEMS.map((item, index) => (
            <div key={index} className="diversification-section__item">
              <img
                src={
                  index === 1
                    ? icRelatorio
                    : index === 2
                    ? icCarteira
                    : index === 3
                    ? icRanking
                    : icComparador
                }
                alt=""
                className="diversification-section__icon-img"
              />
              <p className="diversification-section__item-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DiversificationSection;
```

### src/components/DiversificationSection/DiversificationSection.css
```css
.diversification-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 56px 40px;
  background: #1e1e1e;
}

.diversification-section__eyebrow {
  margin: 0;
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: var(--color-label-primary);
  text-align: center;
}

.diversification-section__eyebrow::before {
  display: none;
}

.diversification-section__content {
  background: linear-gradient(0deg, rgba(29, 170, 251, 0.1), rgba(29, 170, 251, 0) 100%);
  border: 1px solid rgba(29, 170, 251, 0.15);
  border-radius: 12px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 960px;
  position: relative;
  overflow: hidden;
}

.diversification-section__content::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 340px 260px at 22% 89%, rgba(29, 170, 251, 0.14), transparent 70%);
  pointer-events: none;
}

.diversification-section__text-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
  position: relative;
  z-index: 1;
  width: 100%;
}

.diversification-section__hook {
  flex: 0 0 auto;
  padding: 0;
  margin: 0;
  text-align: center;
}

.diversification-section__hook > div {
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: var(--color-label-primary);
  margin: 0;
}

.diversification-section__content .diversification-section__eyebrow {
  text-align: center;
  margin-bottom: 0;
  font-family: var(--font-primary);
  font-size: 18px;
  font-weight: 600;
  color: var(--color-label-primary);
  line-height: 28px;
  width: 100%;
}

.diversification-section__note {
  font-family: var(--font-secondary);
  font-size: 13px;
  color: var(--color-label-secondary);
  font-style: italic;
  margin: 0;
  line-height: 18px;
  width: 100%;
}

.diversification-section__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  flex: 1;
  position: relative;
  z-index: 1;
}

.diversification-section__item {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  position: relative;
  z-index: 1;
  text-align: center;
}

.diversification-section__icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: var(--color-overlay-lower);
  color: var(--color-label-brand-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.diversification-section__icon-img {
  width: 24px;
  height: 24px;
}

.diversification-section__item-text {
  font-family: var(--font-secondary);
  font-size: 13px;
  color: var(--color-label-primary);
  margin: 0;
  line-height: 18px;
}

@media (max-width: 860px) {
  .diversification-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .diversification-section {
    padding: 40px 24px;
    gap: 24px;
  }

  .diversification-section__content {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .diversification-section__grid {
    grid-template-columns: 1fr;
  }
}
```

### src/components/TestimonialsSection/TestimonialsSection.tsx
```tsx
import './TestimonialsSection.css';

const TESTIMONIALS = [
  {
    quote:
      'Primeira vez que uso o copy trader e estou gostando muito, principalmente por funcionar em qualquer corretora, dando liberdade de escolha.',
    since: 'Cliente desde 2024',
    duration: 'Copy Invest há 9 meses',
    featured: true,
  },
  {
    quote: 'Muito fácil de implantar e pode ser muito lucrativo.',
    since: 'Cliente desde 2020',
    duration: 'Copy Invest há 2a 6m',
  },
  {
    quote:
      'Oferece a oportunidade de expandir sua carteira sem precisar dedicar tempo diariamente.',
    since: 'Cliente desde 2025',
    duration: 'Copy Invest há 5 meses',
  },
];

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-section__header">
        <h2 className="testimonials-section__title">Quem usa, indica</h2>
      </div>

      <div className="testimonials-section__grid">
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={index}
            className={[
              'testimonials-section__card',
              testimonial.featured && 'testimonials-section__card--featured',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <p className="testimonials-section__quote">{testimonial.quote}</p>
            <div className="testimonials-section__meta">
              <span>{testimonial.since}</span>
              <span>{testimonial.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
```

### src/components/TestimonialsSection/TestimonialsSection.css
```css
.testimonials-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 56px 40px;
  background: #212121;
}

.testimonials-section__header {
  display: flex;
  justify-content: center;
  max-width: 600px;
}

.testimonials-section__title {
  margin: 0;
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: var(--color-label-primary);
}

.testimonials-section__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
  max-width: 960px;
}

.testimonials-section__card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.testimonials-section__card:hover {
  transform: translateY(-3px);
  border-color: var(--color-border-medium);
}

.testimonials-section__card--featured {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px;
}

.testimonials-section__quote {
  margin: 0;
  font-family: var(--font-secondary);
  font-size: 13px;
  color: var(--color-label-primary);
  line-height: 18px;
}

.testimonials-section__card--featured .testimonials-section__quote {
  font-family: var(--font-secondary);
  font-size: 13px;
  color: var(--color-label-primary);
  line-height: 18px;
}

.testimonials-section__meta {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-secondary);
  font-size: 12px;
  color: var(--color-label-tertiary);
  border-top: 1px solid var(--color-border-low);
  padding-top: 16px;
}

@media (max-width: 860px) {
  .testimonials-section__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .testimonials-section {
    padding: 40px 24px;
    gap: 24px;
  }

  .testimonials-section__grid {
    gap: 12px;
  }

  .testimonials-section__card {
    padding: 16px;
  }

  .testimonials-section__card--featured {
    padding: 20px;
  }
}
```

### src/components/ClosingCtaSection/ClosingCtaSection.tsx
```tsx
import './ClosingCtaSection.css';

function ClosingCtaSection() {
  return (
    <section className="closing-cta-section">
      <div className="closing-cta-section__content">
        <h2 className="closing-cta-section__title">
          Pronto para replicar a estratégia certa pra você?
        </h2>
        <div className="closing-cta-section__actions">
          <a href="#estrategias" className="closing-cta-section__btn closing-cta-section__btn--primary">
            Ver estratégias disponíveis
          </a>
        </div>
        <p className="closing-cta-section__support">
          Ainda com dúvidas sobre qual estratégia escolher?{' '}
          <a href="#">Fale com um especialista no WhatsApp →</a>
        </p>
      </div>
    </section>
  );
}

export default ClosingCtaSection;
```

### src/components/ClosingCtaSection/ClosingCtaSection.css
```css
.closing-cta-section {
  text-align: center;
  padding: 56px 40px;
  border-top: 2px solid rgba(29, 170, 251, 0.25);
  background: radial-gradient(ellipse 800px 400px at top center, rgba(29, 170, 251, 0.12), transparent 65%);
}

.closing-cta-section__content {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
}

.closing-cta-section__title {
  margin: 0;
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: var(--color-label-primary);
}

.closing-cta-section__actions {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

.closing-cta-section__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 20px;
  border: 1px solid #1f72ff;
  border-radius: 6px;
  background: linear-gradient(261deg, var(--gradient-brand-a) 0%, var(--gradient-brand-b) 75%);
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.closing-cta-section__btn:hover {
  color: #ffffff;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(39, 153, 250, 0.4);
}

.closing-cta-section__support {
  margin: 0;
  font-family: var(--font-secondary);
  font-size: 13px;
  color: var(--color-label-secondary);
  margin-top: 12px;
}

.closing-cta-section__support a {
  color: var(--color-label-brand-secondary);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
}

.closing-cta-section__support a:hover {
  color: rgba(29, 170, 251, 0.8);
}

@media (max-width: 640px) {
  .closing-cta-section {
    padding: 40px 24px;
  }

  .closing-cta-section__content {
    gap: 24px;
  }
}
```

## 4. Wiring

Import and render them in this order in your page/App component:

```tsx
<NelogicaSection />
<CopyInvestSection />
<ActivationVideoSection />
<ComparisonSection />
<DiversificationSection />
<TestimonialsSection />
<ClosingCtaSection />
```

Note: CopyInvestSection's and ClosingCtaSection's CTA links point to `#estrategias` (an anchor id on a strategies/pricing section) — keep as-is, or point it at whatever the equivalent section's id is in this project.
