<template>
  <account-layout>
    <div class="xl:hidden">
      <Navbar />
    </div>
    <div class="py-0 sm:py-4 md:pb-8 md:pt-4 lg:pt-0 lg:pb-8 text-center">
      <h1 class="sm:text-4xl text-2xl font-normal">Vault Creation</h1>
    </div>

    <div class="xl:grid xl:grid-cols-7 xl:gap-8 sm:m-auto">
      <div class="sm:col-span-2 hidden xl:block">
        <Menu />
      </div>
      <div
        class="mt-5 md:mt-0 flex flex-col items-start space-y-4 lg:col-span-5 w-full"
      >
        <div class="w-full font-inter space-y-4">
          <Steps :step="steps" />
          <div
            class="w-full bg-blue-link bg-opacity-20 flex py-8 cursor-pointer rounded-md"
            style="height: 333px"
          >
            <div class="m-auto flex items-center space-x-1">
              <div>
                <svg
                  width="135"
                  height="135"
                  viewBox="0 0 135 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M91.3334 104.744C98.6987 104.744 105.899 102.56 112.023 98.4684C118.147 94.3765 122.92 88.5605 125.738 81.7558C128.557 74.9512 129.294 67.4635 127.858 60.2397C126.421 53.0159 122.874 46.3805 117.666 41.1724C112.458 35.9643 105.822 32.4176 98.5985 30.9807C91.3747 29.5438 83.8871 30.2813 77.0824 33.0999C70.2778 35.9184 64.4617 40.6915 60.3698 46.8156C56.2778 52.9396 54.0938 60.1395 54.0938 67.5048C54.1048 77.378 58.0318 86.8436 65.0132 93.825C71.9946 100.806 81.4602 104.733 91.3334 104.744V104.744ZM91.3334 33.2445C98.1095 33.2445 104.733 35.2539 110.367 39.0185C116.001 42.7831 120.393 48.1338 122.986 54.3941C125.579 60.6544 126.257 67.543 124.935 74.1888C123.613 80.8346 120.35 86.9392 115.559 91.7306C110.767 96.522 104.663 99.7849 98.017 101.107C91.3711 102.429 84.4825 101.75 78.2223 99.1572C71.962 96.5641 66.6113 92.1729 62.8467 86.5388C59.0822 80.9047 57.0728 74.2809 57.0728 67.5048C57.0834 58.4216 60.6964 49.7135 67.1192 43.2907C73.5421 36.8679 82.2502 33.255 91.3334 33.2445Z"
                    fill="url(#paint0_linear_3047_1438)"
                  />
                  <path
                    d="M134.531 67.5048C134.514 57.3487 130.922 47.5227 124.385 39.7499C117.849 31.9771 108.784 26.7536 98.7813 24.9954V13.8798C98.7774 10.3254 97.3637 6.91776 94.8504 4.40445C92.3371 1.89113 88.9294 0.477438 85.375 0.473535H42.6538C40.8855 0.4702 39.1342 0.817676 37.5012 1.49584C35.8682 2.17401 34.3859 3.16939 33.1403 4.42436L4.41959 33.1455C3.16468 34.3911 2.16933 35.8733 1.49117 37.5062C0.813002 39.1391 0.465497 40.8904 0.468773 42.6585V121.13C0.472676 124.684 1.88637 128.092 4.39968 130.605C6.913 133.118 10.3207 134.532 13.875 134.536H25.7916C25.9888 134.538 26.1844 134.502 26.3673 134.428C26.5501 134.354 26.7165 134.245 26.8567 134.106C26.997 133.968 27.1084 133.803 27.1844 133.621C27.2604 133.439 27.2995 133.244 27.2995 133.046C27.2995 132.849 27.2604 132.654 27.1844 132.472C27.1084 132.29 26.997 132.125 26.8567 131.987C26.7165 131.848 26.5501 131.739 26.3673 131.665C26.1844 131.591 25.9888 131.555 25.7916 131.557H13.875C11.1106 131.554 8.46037 130.454 6.50563 128.499C4.55089 126.544 3.45124 123.894 3.44787 121.13V42.6585C3.45945 41.4791 3.67177 40.3103 4.07572 39.2022H25.7916C29.346 39.1983 32.7536 37.7846 35.267 35.2713C37.7803 32.758 39.194 29.3503 39.1979 25.7959C39.1931 25.404 39.034 25.0298 38.7552 24.7544C38.4764 24.479 38.1002 24.3245 37.7083 24.3245C37.3164 24.3245 36.9403 24.479 36.6614 24.7544C36.3826 25.0298 36.2236 25.404 36.2188 25.7959C36.2155 28.5604 35.1159 31.2108 33.1612 33.1656C31.2064 35.1204 28.5561 36.2202 25.7916 36.2235H5.72626C5.97334 35.8841 6.24037 35.5596 6.52594 35.2518L35.247 6.5307C35.5548 6.24513 35.8793 5.9781 36.2188 5.73102V19.8382C36.2236 20.2301 36.3826 20.6043 36.6614 20.8797C36.9403 21.1552 37.3164 21.3096 37.7083 21.3096C38.1002 21.3096 38.4764 21.1552 38.7552 20.8797C39.034 20.6043 39.1931 20.2301 39.1979 19.8382V4.08049C40.306 3.67653 41.4748 3.46421 42.6542 3.45263H85.375C88.1394 3.456 90.7897 4.55565 92.7444 6.51039C94.6992 8.46513 95.7988 11.1154 95.8022 13.8798V24.5393C89.7848 23.9126 83.7028 24.557 77.9503 26.4308C72.1978 28.3046 66.9032 31.366 62.4093 35.4166C57.9155 39.4672 54.3227 44.4167 51.8638 49.9444C49.4048 55.4722 48.1346 61.4548 48.1354 67.5048C48.1186 76.3352 50.8233 84.9563 55.8813 92.1946C56.1089 92.5148 56.4538 92.7321 56.8408 92.7993C57.2279 92.8665 57.6258 92.7781 57.948 92.5533C58.2702 92.3285 58.4906 91.9856 58.5612 91.5991C58.6318 91.2127 58.5469 90.814 58.325 90.4898C52.3817 81.9678 49.9621 71.4786 51.5719 61.2143C53.1817 50.9501 58.6963 41.7052 66.9632 35.4119C75.23 29.1186 85.6094 26.2639 95.9318 27.4445C106.254 28.6252 115.721 33.7497 122.353 41.7471C128.986 49.7445 132.27 59.9958 131.521 70.3585C130.772 80.7211 126.046 90.3932 118.332 97.3531C110.618 104.313 100.512 108.022 90.1276 107.705C79.7427 107.388 69.8821 103.07 62.6067 95.6528C62.4702 95.5121 62.3072 95.3997 62.1271 95.3222C61.947 95.2446 61.7534 95.2034 61.5573 95.2008C61.3613 95.1983 61.1666 95.2345 60.9846 95.3073C60.8026 95.3802 60.6367 95.4883 60.4965 95.6254C60.3564 95.7625 60.2446 95.9259 60.1678 96.1063C60.0909 96.2866 60.0504 96.4804 60.0486 96.6765C60.0468 96.8726 60.0837 97.067 60.1573 97.2488C60.2308 97.4306 60.3395 97.596 60.4772 97.7357C66.7883 104.199 74.9818 108.5 83.8856 110.025V127.087C83.9185 128.719 84.4984 130.293 85.5323 131.556H31.75C31.3549 131.556 30.9759 131.713 30.6964 131.992C30.417 132.272 30.26 132.651 30.26 133.046C30.26 133.441 30.417 133.82 30.6964 134.1C30.9759 134.379 31.3549 134.536 31.75 134.536H91.3334C93.3082 134.534 95.2015 133.749 96.5978 132.353C97.9942 130.956 98.7794 129.063 98.7813 127.088V110.014C108.784 108.256 117.849 103.032 124.385 95.2596C130.922 87.4868 134.514 77.6609 134.531 67.5048ZM91.3334 131.557C90.1486 131.556 89.0128 131.084 88.175 130.247C87.3372 129.409 86.866 128.273 86.8647 127.088V116.661H95.8022V127.088C95.8008 128.273 95.3296 129.409 94.4918 130.247C93.6541 131.084 92.5182 131.556 91.3334 131.557V131.557ZM95.8022 113.682H86.8647V110.472C88.3494 110.625 89.8409 110.702 91.3334 110.704C92.826 110.703 94.3176 110.625 95.8022 110.471V113.682Z"
                    fill="url(#paint1_linear_3047_1438)"
                  />
                  <path
                    d="M71.9684 80.6096V91.3382C71.9732 91.7301 72.1323 92.1043 72.4111 92.3797C72.6899 92.6551 73.0661 92.8096 73.458 92.8096C73.8499 92.8096 74.226 92.6551 74.5049 92.3797C74.7837 92.1043 74.9427 91.7301 74.9475 91.3382V80.6096C76.62 80.3039 78.1323 79.4212 79.2211 78.1154C80.3099 76.8095 80.9062 75.1632 80.9062 73.463C80.9062 71.7627 80.3099 70.1164 79.2211 68.8105C78.1323 67.5047 76.62 66.622 74.9475 66.3163V43.6714C74.9427 43.2795 74.7837 42.9053 74.5049 42.6298C74.226 42.3544 73.8499 42.2 73.458 42.2C73.0661 42.2 72.6899 42.3544 72.4111 42.6298C72.1323 42.9053 71.9732 43.2795 71.9684 43.6714V66.3163C70.2959 66.622 68.7836 67.5047 67.6949 68.8105C66.6061 70.1164 66.0098 71.7627 66.0098 73.463C66.0098 75.1632 66.6061 76.8095 67.6949 78.1154C68.7836 79.4212 70.2959 80.3039 71.9684 80.6096ZM73.4581 68.9944C74.3419 68.9944 75.2059 69.2565 75.9408 69.7476C76.6757 70.2386 77.2485 70.9365 77.5867 71.7531C77.9249 72.5696 78.0134 73.4681 77.841 74.335C77.6686 75.2018 77.2429 75.9981 76.618 76.6231C75.993 77.248 75.1968 77.6736 74.3299 77.8461C73.4631 78.0185 72.5645 77.93 71.748 77.5918C70.9314 77.2535 70.2335 76.6808 69.7425 75.9459C69.2514 75.211 68.9893 74.347 68.9893 73.4632C68.9906 72.2784 69.4619 71.1425 70.2996 70.3047C71.1374 69.467 72.2733 68.9957 73.4581 68.9944Z"
                    fill="url(#paint2_linear_3047_1438)"
                  />
                  <path
                    d="M89.8441 56.7762V91.3382C89.8489 91.7301 90.008 92.1043 90.2868 92.3797C90.5656 92.6552 90.9418 92.8096 91.3337 92.8096C91.7256 92.8096 92.1017 92.6552 92.3806 92.3797C92.6594 92.1043 92.8184 91.7301 92.8232 91.3382V56.7762C94.4884 56.4553 95.9914 55.5685 97.0773 54.266C98.1633 52.9635 98.7654 51.3255 98.7816 49.6298C98.7709 47.6616 97.9814 45.7776 96.5858 44.3896C95.1902 43.0016 93.302 42.2225 91.3337 42.2225C89.3654 42.2225 87.4771 43.0016 86.0816 44.3896C84.686 45.7776 83.8965 47.6616 83.8857 49.6298C83.9023 51.3255 84.5045 52.9633 85.5904 54.2657C86.6763 55.5681 88.1791 56.455 89.8441 56.7762V56.7762ZM91.3338 45.1611C92.2176 45.1611 93.0816 45.4231 93.8165 45.9142C94.5514 46.4052 95.1242 47.1031 95.4624 47.9197C95.8006 48.7362 95.8891 49.6348 95.7167 50.5016C95.5443 51.3685 95.1187 52.1647 94.4937 52.7897C93.8687 53.4147 93.0725 53.8403 92.2056 54.0127C91.3388 54.1851 90.4402 54.0966 89.6237 53.7584C88.8071 53.4202 88.1092 52.8474 87.6182 52.1125C87.1271 51.3776 86.8651 50.5136 86.8651 49.6298C86.8664 48.445 87.3376 47.3091 88.1754 46.4714C89.0131 45.6336 90.149 45.1624 91.3338 45.1611Z"
                    fill="url(#paint3_linear_3047_1438)"
                  />
                  <path
                    d="M107.719 68.6928V91.3382C107.724 91.7301 107.883 92.1043 108.161 92.3797C108.44 92.6551 108.816 92.8096 109.208 92.8096C109.6 92.8096 109.976 92.6551 110.255 92.3797C110.534 92.1043 110.693 91.7301 110.698 91.3382V68.6928C112.37 68.3869 113.882 67.5043 114.971 66.1984C116.06 64.8926 116.656 63.2464 116.656 61.5463C116.656 59.8461 116.06 58.1999 114.971 56.8941C113.882 55.5882 112.37 54.7056 110.698 54.3997V43.6714C110.693 43.2795 110.534 42.9053 110.255 42.6298C109.976 42.3544 109.6 42.2 109.208 42.2C108.816 42.2 108.44 42.3544 108.161 42.6298C107.883 42.9053 107.724 43.2795 107.719 43.6714V54.3997C106.046 54.7056 104.534 55.5882 103.446 56.8941C102.357 58.1999 101.761 59.8461 101.761 61.5463C101.761 63.2464 102.357 64.8926 103.446 66.1984C104.534 67.5043 106.046 68.3869 107.719 68.6928V68.6928ZM109.208 57.0776C110.092 57.0776 110.956 57.3397 111.691 57.8307C112.426 58.3218 112.999 59.0197 113.337 59.8363C113.675 60.6528 113.764 61.5513 113.591 62.4182C113.419 63.285 112.993 64.0813 112.368 64.7062C111.743 65.3312 110.947 65.7568 110.08 65.9292C109.213 66.1017 108.315 66.0132 107.498 65.675C106.682 65.3367 105.984 64.764 105.493 64.0291C105.002 63.2942 104.74 62.4302 104.74 61.5464C104.741 60.3616 105.212 59.2257 106.05 58.388C106.888 57.5502 108.024 57.079 109.208 57.0776Z"
                    fill="url(#paint4_linear_3047_1438)"
                  />
                  <path
                    d="M19.8338 42.1819C19.6382 42.1817 19.4444 42.2202 19.2636 42.295C19.0828 42.3698 18.9186 42.4795 18.7802 42.6178C18.6419 42.7561 18.5321 42.9204 18.4573 43.1011C18.3825 43.2819 18.344 43.4757 18.3442 43.6713V78.2328C16.679 78.554 15.1762 79.4411 14.0903 80.7436C13.0043 82.0461 12.4022 83.684 12.3857 85.3797C12.3965 87.348 13.186 89.2319 14.5816 90.6199C15.9772 92.0079 17.8654 92.787 19.8337 92.787C21.802 92.787 23.6902 92.0079 25.0858 90.6199C26.4814 89.2319 27.2709 87.348 27.2817 85.3797C27.2652 83.684 26.663 82.0461 25.5771 80.7436C24.4912 79.4411 22.9884 78.554 21.3232 78.2328V43.6713C21.3234 43.4757 21.2849 43.282 21.2101 43.1012C21.1353 42.9204 21.0256 42.7562 20.8873 42.6179C20.7489 42.4795 20.5847 42.3698 20.4039 42.295C20.2232 42.2202 20.0294 42.1818 19.8338 42.1819V42.1819ZM24.3026 85.3797C24.3026 86.2636 24.0405 87.1275 23.5494 87.8624C23.0584 88.5973 22.3605 89.1701 21.5439 89.5083C20.7274 89.8465 19.8289 89.935 18.962 89.7626C18.0951 89.5902 17.2989 89.1646 16.6739 88.5396C16.049 87.9146 15.6234 87.1184 15.4509 86.2515C15.2785 85.3847 15.367 84.4862 15.7052 83.6696C16.0435 82.8531 16.6162 82.1551 17.3511 81.6641C18.086 81.1731 18.95 80.911 19.8338 80.911C21.0186 80.9123 22.1545 81.3835 22.9923 82.2213C23.83 83.059 24.3013 84.1949 24.3026 85.3797Z"
                    fill="url(#paint5_linear_3047_1438)"
                  />
                  <path
                    d="M37.7081 42.1819C37.5125 42.1817 37.3187 42.2202 37.1379 42.295C36.9571 42.3698 36.7929 42.4795 36.6545 42.6178C36.5161 42.7561 36.4064 42.9204 36.3316 43.1011C36.2568 43.2819 36.2183 43.4757 36.2184 43.6713V60.3579C34.5459 60.6636 33.0336 61.5462 31.9449 62.8521C30.8561 64.1579 30.2598 65.8043 30.2598 67.5045C30.2598 69.2047 30.8561 70.8511 31.9449 72.1569C33.0336 73.4628 34.5459 74.3454 36.2184 74.6512V91.3381C36.2232 91.73 36.3823 92.1042 36.6611 92.3797C36.9399 92.6551 37.3161 92.8096 37.708 92.8096C38.0999 92.8096 38.476 92.6551 38.7549 92.3797C39.0337 92.1042 39.1927 91.73 39.1975 91.3381V74.6512C40.87 74.3454 42.3823 73.4628 43.4711 72.1569C44.5599 70.8511 45.1562 69.2047 45.1562 67.5045C45.1562 65.8043 44.5599 64.1579 43.4711 62.8521C42.3823 61.5462 40.87 60.6636 39.1975 60.3579V43.6713C39.1976 43.4757 39.1592 43.282 39.0844 43.1012C39.0096 42.9204 38.8999 42.7562 38.7615 42.6179C38.6232 42.4795 38.459 42.3698 38.2782 42.295C38.0975 42.2202 37.9037 42.1818 37.7081 42.1819V42.1819ZM42.1768 67.5047C42.1768 68.3886 41.9148 69.2526 41.4237 69.9874C40.9327 70.7223 40.2348 71.2951 39.4182 71.6333C38.6017 71.9715 37.7031 72.06 36.8363 71.8876C35.9694 71.7152 35.1732 71.2896 34.5482 70.6646C33.9233 70.0397 33.4976 69.2434 33.3252 68.3765C33.1528 67.5097 33.2413 66.6112 33.5795 65.7946C33.9177 64.9781 34.4905 64.2801 35.2254 63.7891C35.9603 63.2981 36.8243 63.036 37.7081 63.036C38.8929 63.0373 40.0288 63.5085 40.8665 64.3463C41.7043 65.1841 42.1755 66.3199 42.1768 67.5047V67.5047Z"
                    fill="url(#paint6_linear_3047_1438)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_3047_1438"
                      x1="91.3334"
                      y1="30.2651"
                      x2="91.3334"
                      y2="104.744"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#049AFF" />
                      <stop offset="1" stop-color="#1ACE99" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_3047_1438"
                      x1="67.5"
                      y1="0.473511"
                      x2="67.5"
                      y2="134.536"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#049AFF" />
                      <stop offset="1" stop-color="#1ACE99" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_3047_1438"
                      x1="73.458"
                      y1="42.2"
                      x2="73.458"
                      y2="92.8096"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#049AFF" />
                      <stop offset="1" stop-color="#1ACE99" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_3047_1438"
                      x1="91.3337"
                      y1="42.2225"
                      x2="91.3337"
                      y2="92.8096"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#049AFF" />
                      <stop offset="1" stop-color="#1ACE99" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_3047_1438"
                      x1="109.208"
                      y1="42.2"
                      x2="109.208"
                      y2="92.8096"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#049AFF" />
                      <stop offset="1" stop-color="#1ACE99" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_3047_1438"
                      x1="19.8337"
                      y1="42.1819"
                      x2="19.8337"
                      y2="92.787"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#049AFF" />
                      <stop offset="1" stop-color="#1ACE99" />
                    </linearGradient>
                    <linearGradient
                      id="paint6_linear_3047_1438"
                      x1="37.708"
                      y1="42.1819"
                      x2="37.708"
                      y2="92.8095"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#049AFF" />
                      <stop offset="1" stop-color="#1ACE99" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                class="flex flex-col items-start space-y-2 text-gray-700 font-bold text-2xl font-inter"
              >
                <span>Vault Instructions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full py-8 space-y-16" v-if="vault">
      <MintCardVault cardtype="mint" @isminted="MintVault" @nextStep="Edit" />
      <div class="w-full space-y-4">
        <div
          class="flex md:pb-14 py-0 sm:py-4 md:pt-4 lg:pt-0 lg:pb-8 text-center"
        >
          <span
            class="m-auto sm:text-4xl text-2xl text-center font-normal font-inter text-black"
            v-if="vault"
          >
            {{ vault.name }}</span
          >
        </div>
        <div class="w-full md:pb-24">
          <VaultSlideShow :slides="localNfts" />
        </div>
        <div class="w-full px-4 py-4 grid lg:grid-cols-4 gap-4">
          <!-- left -->
          <div
            class="lg:col-span-3 col-span-4 w-full flex flex-col items-start space-y-5"
          >
            <span class="text-2xl text-black font-inter font-medium"
              >Own Legends</span
            >
            <FractionCard :goDown="true" :goBack="false" :vault="vault" />
            <p
              class="text-lg font-normal font-inter text-black bg-white py-2 px-4 shadow-md rounded-md"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
          <!-- right -->
          <div class="w-full col-span-4 lg:col-span-1">
            <BuyFractionCard />
          </div>
        </div>
        <div class="w-full space-y-4 px-4 pt-8">
          <div>
            <span class="text-2xl text-black font-inter font-medium"
              >All {{ vault.name }} Assets</span
            >
          </div>
          <div class="grid lg:grid-cols-3 gap-8" id="CategoryCards">
            <CategoryCard
              v-for="(nfts, index, key) in localNfts"
              :key="key"
              :category="nfts"
            >
              <template #image>
                <img
                  class="w-full h-full object-cover border-b"
                  :src="nfts.img"
                  alt=""
                />
              </template>

              <template #subtitle>
                <span
                  class="text-sm font-inter font-medium text-primary-500 cursor-pointer"
                  >{{ nfts.sub_title }}</span
                >
              </template>
              <template #title>
                <span class="text-gray-900 text-xl font-semibold font-inter">{{
                  nfts.title
                }}</span>
              </template>
            </CategoryCard>
          </div>
        </div>
      </div>
      <VaultMintSteps :show="showMintSteps" :vault="vault" />
    </div>
  </account-layout>
</template>

<script>
import Steps from "@/components/Drawers/Steps.vue";
import Menu from "@/components/Layouts/Menu.vue";
import AccountLayout from "../../components/Layouts/AccountLayout.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import MintCardVault from "@/components/cards/MintCardVault.vue";
import VaultSlideShow from "@/components/SlideShow/VaultSlideShow1.vue";
import FractionCard from "@/components/cards/FractionCard.vue";
import BuyFractionCard from "../../components/cards/BuyFractionCard.vue";
import CategoryCard from "../../components/cards/CategoryCard.vue";
import VaultMintSteps from "@/components/Modals/VaultMintSteps.vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { onMounted, ref } from "vue";
import { getVault } from "../../firebase/vaults";
import MoralisFactory from "../../moralis";

const steps = [
  {
    id: "1",
    name: "Propose New Vault",
    description: "Vitae sed mi luctus laoreet.",
    href: "#",
    status: "complete",
  },
  {
    id: "2",
    name: "Approve Reviewed Vault",
    description: "Cursus semper viverra.",
    href: "#",
    status: "current",
  },
  {
    id: "3",
    name: "Fractionalize",
    description: "Penatibus eu quis ante.",
    href: "#",
    status: "upcoming",
  },
];
const slides = [
  {
    image: "/images/sneakers/01.png",
    name: "Books",
  },
  {
    image: "/images/sneakers/01.png",
    name: "Books",
  },
  {
    image: "/images/sneakers/red.png",
    name: "Books",
  },
];
const categories = [
  {
    name: "Nike Waffle Sneakers",
    image: "/images/sneakers/01.png",
    title: "Sneakers Collection",
  },
  {
    name: "Basket Name",
    image: "/images/sneakers/02.png",
    title: "Sneakers Collection",
  },
  {
    name: "Basket Name",
    image: "/images/sneakers/03.png",
    title: "Sneakers Collection",
  },
  {
    name: "Air Mags",
    image: "/images/sneakers/04.png",
    title: "Sneakers Collection",
  },
  {
    name: "Springers",
    image: "/images/sneakers/red.png",
    title: "Sneakers Collection",
  },
  {
    name: "Jordans",
    image: "/images/sneakers/06.png",
    title: "Sneakers Collection",
  },
];
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const moralisInstance = MoralisFactory.getInstance();

    const vault = ref();

    const localNfts = ref([]);
    const showMintSteps = ref(false);

    const MintVault = () => {
      showMintSteps.value = true;
    };

    const Edit = () => {
      router.push({ name: "VaultsCreateStep4" });
    };

    const loadNfts = async (nfts) => {
      localNfts.value = await Promise.all(
        nfts.map(async (item) => {
          try {
            const token =
              await moralisInstance.Web3API.token.getTokenIdMetadata({
                chain: "rinkeby",
                address: item.address,
                token_id: item.id,
              });

            const metadata = JSON.parse(token.metadata);
            if (metadata) {
              const nft = {
                block_number: item.id,
                name: metadata.name,
                img: metadata.image,
                title: metadata.name,
                badge: vault.value.ticker,
              };

              return nft;
            }
          } catch (error) {
            console.log(error);
            return null;
          }
        })
      );
    };

    const getVaultData = async () => {
      console.log("HERE");

      store.dispatch("NotificationStore/TOGGLE_LOADING");
      vault.value = await getVault(route.params.dbref);
      await loadNfts(vault.value.nfts);
      store.dispatch("NotificationStore/TOGGLE_LOADING");
    };

    onMounted(async () => {
      console.log("HERE");
      await getVaultData();
    });

    return {
      steps,
      slides,
      categories,
      MintVault,
      Edit,
      vault,
      showMintSteps,
      getVaultData,
      localNfts,
    };
  },
  components: {
    Steps,
    Menu,
    Navbar,
    AccountLayout,
    MintCardVault,
    VaultSlideShow,
    FractionCard,
    BuyFractionCard,
    CategoryCard,
    VaultMintSteps,
  },
};
</script>

<style scoped></style>
