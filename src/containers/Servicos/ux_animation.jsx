import style from "./serv.module.css";

// IMPORT IMG DEVICE 
// import DeviceImg from '../../assets/image/device_img.webp'

function UX_Animation() {
  return (
    <section className={style.section}
    //  data-aos="fade-up" data-aos-duration="2000"
     >
     <div className={style.animation_div}>
     <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 614 390"
        height="390"
        width="614"
        
      >
        <g id="Frame">
          <g id="box-figma">
            <path
              fill="#F9F9F9"
              d="M76.2 106.08C72.792 106.08 69.864 105.6 67.416 104.64C64.968 103.632 62.928 102.24 61.296 100.464C59.712 98.688 58.536 96.6 57.768 94.2C57 91.8 56.616 89.16 56.616 86.28V55.104H65.76V85.416C65.76 87.672 66 89.616 66.48 91.248C67.008 92.832 67.728 94.128 68.64 95.136C69.6 96.144 70.704 96.888 71.952 97.368C73.248 97.848 74.688 98.088 76.272 98.088C77.856 98.088 79.296 97.848 80.592 97.368C81.888 96.888 82.992 96.144 83.904 95.136C84.864 94.128 85.584 92.832 86.064 91.248C86.592 89.616 86.856 87.672 86.856 85.416V55.104H96V86.28C96 89.16 95.592 91.8 94.776 94.2C94.008 96.6 92.808 98.688 91.176 100.464C89.592 102.24 87.552 103.632 85.056 104.64C82.56 105.6 79.608 106.08 76.2 106.08ZM137.193 105C135.801 102.168 134.049 99.048 131.937 95.64C129.825 92.232 127.617 88.944 125.313 85.776C124.353 87.024 123.297 88.512 122.145 90.24C121.041 91.968 119.913 93.744 118.761 95.568C117.657 97.344 116.625 99.072 115.665 100.752C114.705 102.432 113.937 103.848 113.361 105H103.065C105.225 100.92 107.721 96.744 110.553 92.472C113.385 88.152 116.457 83.64 119.769 78.936L103.785 55.104H114.585L125.601 72.168L136.473 55.104H146.841L131.073 78.864C134.721 83.808 137.937 88.488 140.721 92.904C143.553 97.32 145.929 101.352 147.849 105H137.193ZM156.562 118.32H147.634L171.97 48.624H180.754L156.562 118.32ZM204.731 106.08C201.323 106.08 198.395 105.6 195.947 104.64C193.499 103.632 191.459 102.24 189.827 100.464C188.243 98.688 187.067 96.6 186.299 94.2C185.531 91.8 185.147 89.16 185.147 86.28V55.104H194.291V85.416C194.291 87.672 194.531 89.616 195.011 91.248C195.539 92.832 196.259 94.128 197.171 95.136C198.131 96.144 199.235 96.888 200.483 97.368C201.779 97.848 203.219 98.088 204.803 98.088C206.387 98.088 207.827 97.848 209.123 97.368C210.419 96.888 211.523 96.144 212.435 95.136C213.395 94.128 214.115 92.832 214.595 91.248C215.123 89.616 215.387 87.672 215.387 85.416V55.104H224.531V86.28C224.531 89.16 224.123 91.8 223.307 94.2C222.539 96.6 221.339 98.688 219.707 100.464C218.123 102.24 216.083 103.632 213.587 104.64C211.091 105.6 208.139 106.08 204.731 106.08ZM236.132 55.104H245.204V105H236.132V55.104ZM283.032 97.512C283.56 97.56 284.256 97.608 285.12 97.656C285.984 97.656 287.16 97.656 288.648 97.656C294.744 97.656 299.28 96.12 302.256 93.048C305.28 89.928 306.792 85.584 306.792 80.016C306.792 74.352 305.328 70.008 302.4 66.984C299.472 63.96 294.936 62.448 288.792 62.448C286.104 62.448 284.184 62.52 283.032 62.664V97.512ZM316.296 80.016C316.296 84.336 315.624 88.104 314.28 91.32C312.936 94.488 311.016 97.152 308.52 99.312C306.072 101.424 303.096 103.008 299.592 104.064C296.136 105.072 292.296 105.576 288.072 105.576C286.056 105.576 283.776 105.48 281.232 105.288C278.688 105.144 276.264 104.808 273.96 104.28V55.824C276.264 55.296 278.712 54.96 281.304 54.816C283.896 54.672 286.2 54.6 288.216 54.6C292.392 54.6 296.208 55.104 299.664 56.112C303.12 57.072 306.072 58.608 308.52 60.72C311.016 62.784 312.936 65.424 314.28 68.64C315.624 71.808 316.296 75.6 316.296 80.016ZM323.683 86.352C323.683 83.04 324.163 80.136 325.123 77.64C326.131 75.144 327.451 73.08 329.083 71.448C330.715 69.768 332.587 68.52 334.699 67.704C336.811 66.84 338.971 66.408 341.179 66.408C346.363 66.408 350.395 68.016 353.275 71.232C356.203 74.448 357.667 79.248 357.667 85.632C357.667 86.112 357.643 86.664 357.595 87.288C357.595 87.864 357.571 88.392 357.523 88.872H332.683C332.923 91.896 333.979 94.248 335.851 95.928C337.771 97.56 340.531 98.376 344.131 98.376C346.243 98.376 348.163 98.184 349.891 97.8C351.667 97.416 353.059 97.008 354.067 96.576L355.219 103.704C354.739 103.944 354.067 104.208 353.203 104.496C352.387 104.736 351.427 104.952 350.323 105.144C349.267 105.384 348.115 105.576 346.867 105.72C345.619 105.864 344.347 105.936 343.051 105.936C339.739 105.936 336.859 105.456 334.411 104.496C331.963 103.488 329.947 102.12 328.363 100.392C326.779 98.616 325.603 96.552 324.835 94.2C324.067 91.8 323.683 89.184 323.683 86.352ZM348.955 82.464C348.955 81.264 348.787 80.136 348.451 79.08C348.115 77.976 347.611 77.04 346.939 76.272C346.315 75.456 345.523 74.832 344.563 74.4C343.651 73.92 342.547 73.68 341.251 73.68C339.907 73.68 338.731 73.944 337.723 74.472C336.715 74.952 335.851 75.6 335.131 76.416C334.459 77.232 333.931 78.168 333.547 79.224C333.163 80.28 332.899 81.36 332.755 82.464H348.955ZM376.335 98.736C378.639 98.736 380.319 98.472 381.375 97.944C382.431 97.368 382.959 96.408 382.959 95.064C382.959 93.816 382.383 92.784 381.231 91.968C380.127 91.152 378.279 90.264 375.687 89.304C374.103 88.728 372.639 88.128 371.295 87.504C369.999 86.832 368.871 86.064 367.911 85.2C366.951 84.336 366.183 83.304 365.607 82.104C365.079 80.856 364.815 79.344 364.815 77.568C364.815 74.112 366.087 71.4 368.631 69.432C371.175 67.416 374.631 66.408 378.999 66.408C381.207 66.408 383.319 66.624 385.335 67.056C387.351 67.44 388.863 67.824 389.871 68.208L388.287 75.264C387.327 74.832 386.103 74.448 384.615 74.112C383.127 73.728 381.399 73.536 379.431 73.536C377.655 73.536 376.215 73.848 375.111 74.472C374.007 75.048 373.455 75.96 373.455 77.208C373.455 77.832 373.551 78.384 373.743 78.864C373.983 79.344 374.367 79.8 374.895 80.232C375.423 80.616 376.119 81.024 376.983 81.456C377.847 81.84 378.903 82.248 380.151 82.68C382.215 83.448 383.967 84.216 385.407 84.984C386.847 85.704 388.023 86.544 388.935 87.504C389.895 88.416 390.591 89.472 391.023 90.672C391.455 91.872 391.671 93.312 391.671 94.992C391.671 98.592 390.327 101.328 387.639 103.2C384.999 105.024 381.207 105.936 376.263 105.936C372.951 105.936 370.287 105.648 368.271 105.072C366.255 104.544 364.839 104.112 364.023 103.776L365.535 96.504C366.831 97.032 368.367 97.536 370.143 98.016C371.967 98.496 374.031 98.736 376.335 98.736ZM408.594 105H399.882V67.344H408.594V105ZM409.53 56.328C409.53 57.96 409.002 59.256 407.946 60.216C406.89 61.176 405.642 61.656 404.202 61.656C402.714 61.656 401.442 61.176 400.386 60.216C399.33 59.256 398.802 57.96 398.802 56.328C398.802 54.648 399.33 53.328 400.386 52.368C401.442 51.408 402.714 50.928 404.202 50.928C405.642 50.928 406.89 51.408 407.946 52.368C409.002 53.328 409.53 54.648 409.53 56.328ZM426.548 85.2C426.548 88.896 427.34 91.608 428.924 93.336C430.556 95.016 432.644 95.856 435.188 95.856C436.58 95.856 437.876 95.664 439.076 95.28C440.324 94.896 441.332 94.44 442.1 93.912V74.4C441.476 74.256 440.708 74.136 439.796 74.04C438.884 73.896 437.732 73.824 436.34 73.824C433.172 73.824 430.748 74.88 429.068 76.992C427.388 79.056 426.548 81.792 426.548 85.2ZM450.812 101.184C450.812 107.184 449.276 111.576 446.204 114.36C443.18 117.144 438.524 118.536 432.236 118.536C429.932 118.536 427.676 118.344 425.468 117.96C423.308 117.576 421.34 117.072 419.564 116.448L421.148 109.032C422.636 109.656 424.316 110.16 426.188 110.544C428.108 110.928 430.172 111.12 432.38 111.12C435.884 111.12 438.38 110.4 439.868 108.96C441.356 107.52 442.1 105.384 442.1 102.552V101.112C441.236 101.544 440.084 101.976 438.644 102.408C437.252 102.84 435.644 103.056 433.82 103.056C431.42 103.056 429.212 102.672 427.196 101.904C425.228 101.136 423.524 100.008 422.084 98.52C420.692 97.032 419.588 95.184 418.772 92.976C418.004 90.72 417.62 88.128 417.62 85.2C417.62 82.464 418.028 79.944 418.844 77.64C419.708 75.336 420.932 73.368 422.516 71.736C424.148 70.104 426.116 68.832 428.42 67.92C430.724 67.008 433.34 66.552 436.268 66.552C439.1 66.552 441.788 66.768 444.332 67.2C446.876 67.632 449.036 68.088 450.812 68.568V101.184ZM461.896 68.568C463.576 68.088 465.76 67.632 468.448 67.2C471.136 66.768 474.112 66.552 477.376 66.552C480.448 66.552 483.016 66.984 485.08 67.848C487.144 68.664 488.776 69.84 489.976 71.376C491.224 72.864 492.088 74.688 492.568 76.848C493.096 78.96 493.36 81.288 493.36 83.832V105H484.648V85.2C484.648 83.184 484.504 81.48 484.216 80.088C483.976 78.648 483.544 77.496 482.92 76.632C482.344 75.72 481.528 75.072 480.472 74.688C479.464 74.256 478.216 74.04 476.728 74.04C475.624 74.04 474.472 74.112 473.272 74.256C472.072 74.4 471.184 74.52 470.608 74.616V105H461.896V68.568ZM513.013 95.424C513.109 96.24 513.157 96.84 513.157 97.224C513.157 97.608 513.157 97.992 513.157 98.376C513.157 101.352 512.677 104.424 511.717 107.592C510.805 110.76 509.509 113.76 507.829 116.592L500.989 114.72C502.141 111.936 502.909 109.2 503.293 106.512C503.725 103.872 503.941 101.544 503.941 99.528C503.941 98.952 503.917 98.232 503.869 97.368C503.869 96.504 503.845 95.856 503.797 95.424H513.013ZM56.976 191V141.104H88.512V148.808H66.048V161.552H85.992V169.256H66.048V191H56.976ZM115.828 161.192C115.108 160.952 114.1 160.712 112.804 160.472C111.556 160.184 110.092 160.04 108.412 160.04C107.452 160.04 106.42 160.136 105.316 160.328C104.26 160.52 103.516 160.688 103.084 160.832V191H94.3721V155.144C96.0521 154.52 98.1401 153.944 100.636 153.416C103.18 152.84 105.988 152.552 109.06 152.552C109.636 152.552 110.308 152.6 111.076 152.696C111.844 152.744 112.612 152.84 113.38 152.984C114.148 153.08 114.892 153.224 115.612 153.416C116.332 153.56 116.908 153.704 117.34 153.848L115.828 161.192ZM157.467 172.136C157.467 175.112 157.035 177.824 156.171 180.272C155.307 182.72 154.083 184.808 152.499 186.536C150.915 188.264 148.995 189.608 146.739 190.568C144.531 191.528 142.083 192.008 139.395 192.008C136.707 192.008 134.259 191.528 132.051 190.568C129.843 189.608 127.947 188.264 126.363 186.536C124.779 184.808 123.531 182.72 122.619 180.272C121.755 177.824 121.323 175.112 121.323 172.136C121.323 169.16 121.755 166.472 122.619 164.072C123.531 161.624 124.779 159.536 126.363 157.808C127.995 156.08 129.915 154.76 132.123 153.848C134.331 152.888 136.755 152.408 139.395 152.408C142.035 152.408 144.459 152.888 146.667 153.848C148.923 154.76 150.843 156.08 152.427 157.808C154.011 159.536 155.235 161.624 156.099 164.072C157.011 166.472 157.467 169.16 157.467 172.136ZM148.539 172.136C148.539 168.392 147.723 165.44 146.091 163.28C144.507 161.072 142.275 159.968 139.395 159.968C136.515 159.968 134.259 161.072 132.627 163.28C131.043 165.44 130.251 168.392 130.251 172.136C130.251 175.928 131.043 178.928 132.627 181.136C134.259 183.344 136.515 184.448 139.395 184.448C142.275 184.448 144.507 183.344 146.091 181.136C147.723 178.928 148.539 175.928 148.539 172.136ZM166.442 154.568C168.122 154.088 170.306 153.632 172.994 153.2C175.682 152.768 178.658 152.552 181.922 152.552C184.994 152.552 187.562 152.984 189.626 153.848C191.69 154.664 193.322 155.84 194.522 157.376C195.77 158.864 196.634 160.688 197.114 162.848C197.642 164.96 197.906 167.288 197.906 169.832V191H189.194V171.2C189.194 169.184 189.05 167.48 188.762 166.088C188.522 164.648 188.09 163.496 187.466 162.632C186.89 161.72 186.074 161.072 185.018 160.688C184.01 160.256 182.762 160.04 181.274 160.04C180.17 160.04 179.018 160.112 177.818 160.256C176.618 160.4 175.73 160.52 175.154 160.616V191H166.442V154.568ZM208.128 143.408L216.84 141.968V153.344H230.232V160.616H216.84V175.952C216.84 178.976 217.32 181.136 218.28 182.432C219.24 183.728 220.872 184.376 223.176 184.376C224.76 184.376 226.152 184.208 227.352 183.872C228.6 183.536 229.584 183.224 230.304 182.936L231.744 189.848C230.736 190.28 229.416 190.712 227.784 191.144C226.152 191.624 224.232 191.864 222.024 191.864C219.336 191.864 217.08 191.504 215.256 190.784C213.48 190.064 212.064 189.032 211.008 187.688C209.952 186.296 209.208 184.64 208.776 182.72C208.344 180.752 208.128 178.52 208.128 176.024V143.408ZM232.234 166.448H251.602V174.44H232.234V166.448ZM259.265 191V141.104H291.305V148.808H268.337V161.12H288.785V168.68H268.337V183.296H293.033V191H259.265ZM301.021 154.568C302.701 154.088 304.885 153.632 307.573 153.2C310.261 152.768 313.237 152.552 316.501 152.552C319.573 152.552 322.141 152.984 324.205 153.848C326.269 154.664 327.901 155.84 329.101 157.376C330.349 158.864 331.213 160.688 331.693 162.848C332.221 164.96 332.485 167.288 332.485 169.832V191H323.773V171.2C323.773 169.184 323.629 167.48 323.341 166.088C323.101 164.648 322.669 163.496 322.045 162.632C321.469 161.72 320.653 161.072 319.597 160.688C318.589 160.256 317.341 160.04 315.853 160.04C314.749 160.04 313.597 160.112 312.397 160.256C311.197 160.4 310.309 160.52 309.733 160.616V191H301.021V154.568ZM349.978 172.064C349.978 175.904 350.89 178.928 352.714 181.136C354.538 183.296 357.058 184.376 360.274 184.376C361.666 184.376 362.842 184.328 363.802 184.232C364.81 184.088 365.626 183.944 366.25 183.8V162.2C365.482 161.672 364.45 161.192 363.154 160.76C361.906 160.28 360.562 160.04 359.122 160.04C355.954 160.04 353.626 161.12 352.138 163.28C350.698 165.44 349.978 168.368 349.978 172.064ZM374.962 189.848C373.234 190.376 371.05 190.856 368.41 191.288C365.818 191.72 363.082 191.936 360.202 191.936C357.226 191.936 354.562 191.48 352.21 190.568C349.858 189.656 347.842 188.36 346.162 186.68C344.53 184.952 343.258 182.888 342.346 180.488C341.482 178.04 341.05 175.304 341.05 172.28C341.05 169.304 341.41 166.616 342.13 164.216C342.898 161.768 344.002 159.68 345.442 157.952C346.882 156.224 348.634 154.904 350.698 153.992C352.762 153.032 355.138 152.552 357.826 152.552C359.65 152.552 361.258 152.768 362.65 153.2C364.042 153.632 365.242 154.112 366.25 154.64V136.568L374.962 135.128V189.848ZM395.028 181.424C395.124 182.24 395.172 182.84 395.172 183.224C395.172 183.608 395.172 183.992 395.172 184.376C395.172 187.352 394.692 190.424 393.732 193.592C392.82 196.76 391.524 199.76 389.844 202.592L383.004 200.72C384.156 197.936 384.924 195.2 385.308 192.512C385.74 189.872 385.956 187.544 385.956 185.528C385.956 184.952 385.932 184.232 385.884 183.368C385.884 182.504 385.86 181.856 385.812 181.424H395.028ZM67.848 227.104C68.904 228.928 70.08 231.16 71.376 233.8C72.672 236.44 73.992 239.224 75.336 242.152C76.68 245.032 78 247.984 79.296 251.008C80.64 253.984 81.864 256.744 82.968 259.288C84.072 256.744 85.272 253.984 86.568 251.008C87.864 247.984 89.184 245.032 90.528 242.152C91.872 239.224 93.192 236.44 94.488 233.8C95.784 231.16 96.96 228.928 98.016 227.104H106.224C106.656 230.752 107.064 234.64 107.448 238.768C107.832 242.848 108.168 247.048 108.456 251.368C108.792 255.64 109.08 259.96 109.32 264.328C109.608 268.648 109.848 272.872 110.04 277H101.112C100.92 271.192 100.68 265.216 100.392 259.072C100.152 252.928 99.768 246.976 99.24 241.216C98.712 242.32 98.088 243.64 97.368 245.176C96.648 246.712 95.88 248.392 95.064 250.216C94.248 251.992 93.408 253.84 92.544 255.76C91.728 257.68 90.912 259.552 90.096 261.376C89.328 263.152 88.608 264.832 87.936 266.416C87.264 267.952 86.688 269.272 86.208 270.376H79.44C78.96 269.272 78.384 267.928 77.712 266.344C77.04 264.76 76.296 263.08 75.48 261.304C74.712 259.48 73.896 257.608 73.032 255.688C72.216 253.768 71.4 251.92 70.584 250.144C69.768 248.368 69 246.712 68.28 245.176C67.56 243.592 66.936 242.272 66.408 241.216C65.88 246.976 65.472 252.928 65.184 259.072C64.944 265.216 64.728 271.192 64.536 277H55.608C55.8 272.872 56.016 268.6 56.256 264.184C56.544 259.768 56.832 255.4 57.12 251.08C57.456 246.712 57.816 242.488 58.2 238.408C58.584 234.328 58.992 230.56 59.424 227.104H67.848ZM154.233 258.136C154.233 261.112 153.801 263.824 152.937 266.272C152.073 268.72 150.849 270.808 149.265 272.536C147.681 274.264 145.761 275.608 143.505 276.568C141.297 277.528 138.849 278.008 136.161 278.008C133.473 278.008 131.025 277.528 128.817 276.568C126.609 275.608 124.713 274.264 123.129 272.536C121.545 270.808 120.297 268.72 119.385 266.272C118.521 263.824 118.089 261.112 118.089 258.136C118.089 255.16 118.521 252.472 119.385 250.072C120.297 247.624 121.545 245.536 123.129 243.808C124.761 242.08 126.681 240.76 128.889 239.848C131.097 238.888 133.521 238.408 136.161 238.408C138.801 238.408 141.225 238.888 143.433 239.848C145.689 240.76 147.609 242.08 149.193 243.808C150.777 245.536 152.001 247.624 152.865 250.072C153.777 252.472 154.233 255.16 154.233 258.136ZM145.305 258.136C145.305 254.392 144.489 251.44 142.857 249.28C141.273 247.072 139.041 245.968 136.161 245.968C133.281 245.968 131.025 247.072 129.393 249.28C127.809 251.44 127.017 254.392 127.017 258.136C127.017 261.928 127.809 264.928 129.393 267.136C131.025 269.344 133.281 270.448 136.161 270.448C139.041 270.448 141.273 269.344 142.857 267.136C144.489 264.928 145.305 261.928 145.305 258.136ZM162.776 229.408L171.488 227.968V239.344H184.88V246.616H171.488V261.952C171.488 264.976 171.968 267.136 172.928 268.432C173.888 269.728 175.52 270.376 177.824 270.376C179.408 270.376 180.8 270.208 182 269.872C183.248 269.536 184.232 269.224 184.952 268.936L186.392 275.848C185.384 276.28 184.064 276.712 182.432 277.144C180.8 277.624 178.88 277.864 176.672 277.864C173.984 277.864 171.728 277.504 169.904 276.784C168.128 276.064 166.712 275.032 165.656 273.688C164.6 272.296 163.856 270.64 163.424 268.72C162.992 266.752 162.776 264.52 162.776 262.024V229.408ZM202.086 277H193.374V239.344H202.086V277ZM203.022 228.328C203.022 229.96 202.494 231.256 201.438 232.216C200.382 233.176 199.134 233.656 197.694 233.656C196.206 233.656 194.934 233.176 193.878 232.216C192.822 231.256 192.294 229.96 192.294 228.328C192.294 226.648 192.822 225.328 193.878 224.368C194.934 223.408 196.206 222.928 197.694 222.928C199.134 222.928 200.382 223.408 201.438 224.368C202.494 225.328 203.022 226.648 203.022 228.328ZM247.256 258.136C247.256 261.112 246.824 263.824 245.96 266.272C245.096 268.72 243.872 270.808 242.288 272.536C240.704 274.264 238.784 275.608 236.528 276.568C234.32 277.528 231.872 278.008 229.184 278.008C226.496 278.008 224.048 277.528 221.84 276.568C219.632 275.608 217.736 274.264 216.152 272.536C214.568 270.808 213.32 268.72 212.408 266.272C211.544 263.824 211.112 261.112 211.112 258.136C211.112 255.16 211.544 252.472 212.408 250.072C213.32 247.624 214.568 245.536 216.152 243.808C217.784 242.08 219.704 240.76 221.912 239.848C224.12 238.888 226.544 238.408 229.184 238.408C231.824 238.408 234.248 238.888 236.456 239.848C238.712 240.76 240.632 242.08 242.216 243.808C243.8 245.536 245.024 247.624 245.888 250.072C246.8 252.472 247.256 255.16 247.256 258.136ZM238.328 258.136C238.328 254.392 237.512 251.44 235.88 249.28C234.296 247.072 232.064 245.968 229.184 245.968C226.304 245.968 224.048 247.072 222.416 249.28C220.832 251.44 220.04 254.392 220.04 258.136C220.04 261.928 220.832 264.928 222.416 267.136C224.048 269.344 226.304 270.448 229.184 270.448C232.064 270.448 234.296 269.344 235.88 267.136C237.512 264.928 238.328 261.928 238.328 258.136ZM256.232 240.568C257.912 240.088 260.096 239.632 262.784 239.2C265.472 238.768 268.448 238.552 271.712 238.552C274.784 238.552 277.352 238.984 279.416 239.848C281.48 240.664 283.112 241.84 284.312 243.376C285.56 244.864 286.424 246.688 286.904 248.848C287.432 250.96 287.695 253.288 287.695 255.832V277H278.984V257.2C278.984 255.184 278.84 253.48 278.552 252.088C278.312 250.648 277.88 249.496 277.256 248.632C276.68 247.72 275.864 247.072 274.808 246.688C273.8 246.256 272.552 246.04 271.064 246.04C269.96 246.04 268.808 246.112 267.608 246.256C266.408 246.4 265.52 246.52 264.944 246.616V277H256.232V240.568ZM324.657 269.512C325.185 269.56 325.881 269.608 326.745 269.656C327.609 269.656 328.785 269.656 330.273 269.656C336.369 269.656 340.905 268.12 343.881 265.048C346.905 261.928 348.417 257.584 348.417 252.016C348.417 246.352 346.953 242.008 344.025 238.984C341.097 235.96 336.561 234.448 330.417 234.448C327.729 234.448 325.809 234.52 324.657 234.664V269.512ZM357.921 252.016C357.921 256.336 357.249 260.104 355.905 263.32C354.561 266.488 352.641 269.152 350.145 271.312C347.697 273.424 344.721 275.008 341.217 276.064C337.761 277.072 333.921 277.576 329.697 277.576C327.681 277.576 325.401 277.48 322.857 277.288C320.313 277.144 317.889 276.808 315.585 276.28V227.824C317.889 227.296 320.337 226.96 322.929 226.816C325.521 226.672 327.825 226.6 329.841 226.6C334.017 226.6 337.833 227.104 341.289 228.112C344.745 229.072 347.697 230.608 350.145 232.72C352.641 234.784 354.561 237.424 355.905 240.64C357.249 243.808 357.921 247.6 357.921 252.016ZM365.308 258.352C365.308 255.04 365.788 252.136 366.748 249.64C367.756 247.144 369.076 245.08 370.708 243.448C372.34 241.768 374.212 240.52 376.324 239.704C378.436 238.84 380.596 238.408 382.804 238.408C387.988 238.408 392.02 240.016 394.9 243.232C397.828 246.448 399.292 251.248 399.292 257.632C399.292 258.112 399.268 258.664 399.22 259.288C399.22 259.864 399.196 260.392 399.148 260.872H374.308C374.548 263.896 375.604 266.248 377.476 267.928C379.396 269.56 382.156 270.376 385.756 270.376C387.868 270.376 389.788 270.184 391.516 269.8C393.292 269.416 394.684 269.008 395.692 268.576L396.844 275.704C396.364 275.944 395.692 276.208 394.828 276.496C394.012 276.736 393.052 276.952 391.948 277.144C390.892 277.384 389.74 277.576 388.492 277.72C387.244 277.864 385.972 277.936 384.676 277.936C381.364 277.936 378.484 277.456 376.036 276.496C373.588 275.488 371.572 274.12 369.988 272.392C368.404 270.616 367.228 268.552 366.46 266.2C365.692 263.8 365.308 261.184 365.308 258.352ZM390.58 254.464C390.58 253.264 390.412 252.136 390.076 251.08C389.74 249.976 389.236 249.04 388.564 248.272C387.94 247.456 387.148 246.832 386.188 246.4C385.276 245.92 384.172 245.68 382.876 245.68C381.532 245.68 380.356 245.944 379.348 246.472C378.34 246.952 377.476 247.6 376.756 248.416C376.084 249.232 375.556 250.168 375.172 251.224C374.788 252.28 374.524 253.36 374.38 254.464H390.58ZM417.96 270.736C420.264 270.736 421.944 270.472 423 269.944C424.056 269.368 424.584 268.408 424.584 267.064C424.584 265.816 424.008 264.784 422.856 263.968C421.752 263.152 419.904 262.264 417.312 261.304C415.728 260.728 414.264 260.128 412.92 259.504C411.624 258.832 410.496 258.064 409.536 257.2C408.576 256.336 407.808 255.304 407.232 254.104C406.704 252.856 406.44 251.344 406.44 249.568C406.44 246.112 407.712 243.4 410.256 241.432C412.8 239.416 416.256 238.408 420.624 238.408C422.832 238.408 424.944 238.624 426.96 239.056C428.976 239.44 430.488 239.824 431.496 240.208L429.912 247.264C428.952 246.832 427.728 246.448 426.24 246.112C424.752 245.728 423.024 245.536 421.056 245.536C419.28 245.536 417.84 245.848 416.736 246.472C415.632 247.048 415.08 247.96 415.08 249.208C415.08 249.832 415.176 250.384 415.368 250.864C415.608 251.344 415.992 251.8 416.52 252.232C417.048 252.616 417.744 253.024 418.608 253.456C419.472 253.84 420.528 254.248 421.776 254.68C423.84 255.448 425.592 256.216 427.032 256.984C428.472 257.704 429.648 258.544 430.56 259.504C431.52 260.416 432.216 261.472 432.648 262.672C433.08 263.872 433.296 265.312 433.296 266.992C433.296 270.592 431.952 273.328 429.264 275.2C426.624 277.024 422.832 277.936 417.888 277.936C414.576 277.936 411.912 277.648 409.896 277.072C407.88 276.544 406.464 276.112 405.648 275.776L407.16 268.504C408.456 269.032 409.992 269.536 411.768 270.016C413.592 270.496 415.656 270.736 417.96 270.736ZM450.219 277H441.507V239.344H450.219V277ZM451.155 228.328C451.155 229.96 450.627 231.256 449.571 232.216C448.515 233.176 447.267 233.656 445.827 233.656C444.339 233.656 443.067 233.176 442.011 232.216C440.955 231.256 440.427 229.96 440.427 228.328C440.427 226.648 440.955 225.328 442.011 224.368C443.067 223.408 444.339 222.928 445.827 222.928C447.267 222.928 448.515 223.408 449.571 224.368C450.627 225.328 451.155 226.648 451.155 228.328ZM468.173 257.2C468.173 260.896 468.965 263.608 470.549 265.336C472.181 267.016 474.269 267.856 476.813 267.856C478.205 267.856 479.501 267.664 480.701 267.28C481.949 266.896 482.957 266.44 483.725 265.912V246.4C483.101 246.256 482.333 246.136 481.421 246.04C480.509 245.896 479.357 245.824 477.965 245.824C474.797 245.824 472.373 246.88 470.693 248.992C469.013 251.056 468.173 253.792 468.173 257.2ZM492.437 273.184C492.437 279.184 490.901 283.576 487.829 286.36C484.805 289.144 480.149 290.536 473.861 290.536C471.557 290.536 469.301 290.344 467.093 289.96C464.933 289.576 462.965 289.072 461.189 288.448L462.773 281.032C464.261 281.656 465.941 282.16 467.813 282.544C469.733 282.928 471.797 283.12 474.005 283.12C477.509 283.12 480.005 282.4 481.493 280.96C482.981 279.52 483.725 277.384 483.725 274.552V273.112C482.861 273.544 481.709 273.976 480.269 274.408C478.877 274.84 477.269 275.056 475.445 275.056C473.045 275.056 470.837 274.672 468.821 273.904C466.853 273.136 465.149 272.008 463.709 270.52C462.317 269.032 461.213 267.184 460.397 264.976C459.629 262.72 459.245 260.128 459.245 257.2C459.245 254.464 459.653 251.944 460.469 249.64C461.333 247.336 462.557 245.368 464.141 243.736C465.773 242.104 467.741 240.832 470.045 239.92C472.349 239.008 474.965 238.552 477.893 238.552C480.725 238.552 483.413 238.768 485.957 239.2C488.501 239.632 490.661 240.088 492.437 240.568V273.184ZM503.521 240.568C505.201 240.088 507.385 239.632 510.073 239.2C512.761 238.768 515.737 238.552 519.001 238.552C522.073 238.552 524.641 238.984 526.705 239.848C528.769 240.664 530.401 241.84 531.601 243.376C532.849 244.864 533.713 246.688 534.193 248.848C534.721 250.96 534.985 253.288 534.985 255.832V277H526.273V257.2C526.273 255.184 526.129 253.48 525.841 252.088C525.601 250.648 525.169 249.496 524.545 248.632C523.969 247.72 523.153 247.072 522.097 246.688C521.089 246.256 519.841 246.04 518.353 246.04C517.249 246.04 516.097 246.112 514.897 246.256C513.697 246.4 512.809 246.52 512.233 246.616V277H503.521V240.568ZM555.43 272.248C555.43 273.928 554.854 275.296 553.702 276.352C552.598 277.408 551.254 277.936 549.67 277.936C548.038 277.936 546.67 277.408 545.566 276.352C544.462 275.296 543.91 273.928 543.91 272.248C543.91 270.568 544.462 269.2 545.566 268.144C546.67 267.04 548.038 266.488 549.67 266.488C551.254 266.488 552.598 267.04 553.702 268.144C554.854 269.2 555.43 270.568 555.43 272.248Z"
              className={style.text}
            ></path>
            <g className={style.box}>
              <path
                strokeWidth="2"
                stroke="#2563EB"
                fillOpacity="0.05"
                fill="#2563EB"
                d="M587 20H28V306H587V20Z"
                id="figny9-box"
              ></path>
              <path
                strokeWidth="2"
                stroke="#2563EB"
                fill="white"
                d="M33 15H23V25H33V15Z"
                id="figny9-adjust-1"
              ></path>
              <path
                strokeWidth="2"
                stroke="#2563EB"
                fill="white"
                d="M33 301H23V311H33V301Z"
                id="figny9-adjust-3"
              ></path>
              <path
                strokeWidth="2"
                stroke="#2563EB"
                fill="white"
                d="M592 301H582V311H592V301Z"
                id="figny9-adjust-4"
              ></path>
              <path
                strokeWidth="2"
                stroke="#2563EB"
                fill="white"
                d="M592 15H582V25H592V15Z"
                id="figny9-adjust-2"
              ></path>
            </g>
            <g id="cursor" className={style.cursor}>
              <path
                strokeWidth="2"
                stroke="white"
                fill="#2563EB"
                d="M453.383 343L448 317L471 331L459.745 333.5L453.383 343Z"
                id="Vector 273"
              ></path>
              <path
                fill="#2563EB"
                d="M587 343H469.932V376H587V343Z"
                id="Rectangle 786"
              ></path>
              <g id="Erivelton Magalhães" className={style.text}>
                <path
                  fill="white"
                  d="M479.592 364.208C479.197 364.208 479 364.011 479 363.616V354.128C479 353.733 479.197 353.536 479.592 353.536H483.448C484.819 353.536 485.824 353.859 486.464 354.504C487.104 355.144 487.424 356.149 487.424 357.52V360.224C487.424 361.595 487.104 362.603 486.464 363.248C485.829 363.888 484.824 364.208 483.448 364.208H479.592ZM480.176 363.032H483.448C484.141 363.032 484.693 362.944 485.104 362.768C485.515 362.592 485.808 362.299 485.984 361.888C486.16 361.477 486.248 360.923 486.248 360.224V357.52C486.248 356.827 486.16 356.275 485.984 355.864C485.808 355.453 485.515 355.16 485.104 354.984C484.693 354.803 484.141 354.712 483.448 354.712H480.176V363.032Z"
                ></path>
                <path
                  fill="white"
                  d="M492.729 364.208C491.854 364.208 491.206 363.997 490.785 363.576C490.363 363.155 490.153 362.507 490.153 361.632C490.153 360.757 490.36 360.109 490.776 359.688C491.198 359.267 491.849 359.056 492.729 359.056H496.193C496.171 358.448 496.022 358.029 495.745 357.8C495.467 357.571 494.995 357.456 494.328 357.456H493.401C492.819 357.456 492.387 357.504 492.104 357.6C491.827 357.696 491.641 357.864 491.545 358.104C491.47 358.296 491.387 358.432 491.297 358.512C491.211 358.587 491.078 358.624 490.896 358.624C490.699 358.624 490.544 358.571 490.432 358.464C490.326 358.352 490.294 358.205 490.337 358.024C490.465 357.421 490.779 356.981 491.281 356.704C491.782 356.421 492.489 356.28 493.401 356.28H494.328C495.369 356.28 496.136 356.528 496.632 357.024C497.128 357.52 497.377 358.288 497.377 359.328V363.616C497.377 364.011 497.182 364.208 496.792 364.208C496.398 364.208 496.201 364.011 496.201 363.616V363.112C495.651 363.843 494.793 364.208 493.625 364.208H492.729ZM492.729 363.032H493.625C494.057 363.032 494.454 362.989 494.817 362.904C495.179 362.819 495.483 362.669 495.729 362.456C495.974 362.243 496.131 361.944 496.201 361.56V360.232H492.729C492.179 360.232 491.808 360.331 491.616 360.528C491.424 360.72 491.328 361.088 491.328 361.632C491.328 362.181 491.424 362.552 491.616 362.744C491.808 362.936 492.179 363.032 492.729 363.032Z"
                ></path>
                <path
                  fill="white"
                  d="M501.029 364.208C500.635 364.208 500.438 364.011 500.438 363.616V356.864C500.438 356.475 500.635 356.28 501.029 356.28C501.419 356.28 501.614 356.475 501.614 356.864V357.696C501.918 357.232 502.317 356.88 502.813 356.64C503.315 356.4 503.896 356.28 504.558 356.28C504.952 356.28 505.149 356.475 505.149 356.864C505.149 357.259 504.952 357.456 504.558 357.456C503.624 357.456 502.909 357.643 502.413 358.016C501.917 358.384 501.651 358.888 501.614 359.528V363.616C501.614 364.011 501.419 364.208 501.029 364.208Z"
                ></path>
                <path
                  fill="white"
                  d="M509.344 364.208C508.549 364.208 507.96 364.016 507.576 363.632C507.192 363.243 507 362.651 507 361.856V353.584C507 353.195 507.197 353 507.592 353C507.981 353 508.176 353.195 508.176 353.584V361.856C508.176 362.32 508.253 362.632 508.408 362.792C508.568 362.952 508.88 363.032 509.344 363.032C509.744 363.032 509.944 363.227 509.944 363.616C509.955 364.011 509.755 364.208 509.344 364.208Z"
                ></path>
                <path
                  fill="white"
                  d="M514.563 364.208C513.768 364.208 513.179 364.016 512.795 363.632C512.411 363.243 512.219 362.651 512.219 361.856V353.584C512.219 353.195 512.416 353 512.811 353C513.2 353 513.395 353.195 513.395 353.584V361.856C513.395 362.32 513.472 362.632 513.627 362.792C513.787 362.952 514.099 363.032 514.563 363.032C514.963 363.032 515.163 363.227 515.163 363.616C515.173 364.011 514.973 364.208 514.563 364.208Z"
                ></path>
                <path
                  fill="white"
                  d="M517.973 360.72V361.168C517.973 361.877 518.106 362.365 518.373 362.632C518.64 362.899 519.133 363.032 519.853 363.032H521.165C521.752 363.032 522.181 362.971 522.453 362.848C522.73 362.72 522.909 362.499 522.989 362.184C523.032 362.008 523.098 361.872 523.189 361.776C523.285 361.68 523.426 361.632 523.613 361.632C523.81 361.632 523.96 361.685 524.061 361.792C524.162 361.893 524.197 362.043 524.165 362.24C524.064 362.907 523.762 363.403 523.261 363.728C522.765 364.048 522.066 364.208 521.165 364.208H519.853C518.813 364.208 518.042 363.96 517.541 363.464C517.045 362.968 516.797 362.203 516.797 361.168V359.328C516.797 358.272 517.045 357.499 517.541 357.008C518.042 356.512 518.813 356.269 519.853 356.28H521.165C522.205 356.28 522.973 356.528 523.469 357.024C523.965 357.515 524.213 358.283 524.213 359.328V360.128C524.213 360.523 524.018 360.72 523.629 360.72H517.973ZM519.853 357.456C519.133 357.445 518.64 357.573 518.373 357.84C518.106 358.107 517.973 358.603 517.973 359.328V359.544H523.037V359.328C523.037 358.608 522.904 358.117 522.637 357.856C522.376 357.589 521.885 357.456 521.165 357.456H519.853Z"
                ></path>
                <path
                  fill="white"
                  d="M529.158 367.408C528.411 367.408 527.854 367.221 527.486 366.848C527.123 366.48 526.942 365.92 526.942 365.168C526.942 364.779 527.136 364.584 527.526 364.584C527.92 364.584 528.118 364.779 528.118 365.168C528.118 365.595 528.184 365.877 528.318 366.016C528.456 366.16 528.736 366.232 529.158 366.232H532.15C532.571 366.232 532.851 366.16 532.99 366.016C533.128 365.877 533.198 365.595 533.198 365.168V363.08C532.883 363.533 532.507 363.835 532.07 363.984C531.632 364.133 531.147 364.208 530.614 364.208H529.942C528.912 364.208 528.155 363.965 527.67 363.48C527.184 362.995 526.942 362.243 526.942 361.224V356.864C526.942 356.469 527.136 356.272 527.526 356.272C527.92 356.272 528.118 356.469 528.118 356.864V361.224C528.118 361.917 528.246 362.392 528.502 362.648C528.763 362.904 529.243 363.032 529.942 363.032H530.614C531.51 363.032 532.163 362.883 532.574 362.584C532.99 362.285 533.198 361.832 533.198 361.224V356.864C533.198 356.469 533.392 356.272 533.782 356.272C534.176 356.272 534.374 356.469 534.374 356.864V365.168C534.374 365.92 534.19 366.48 533.822 366.848C533.454 367.221 532.896 367.408 532.15 367.408H529.158Z"
                ></path>
                <path
                  fill="white"
                  d="M542.873 364.208C542.479 364.208 542.281 364.011 542.281 363.616V354.128C542.281 353.733 542.479 353.536 542.873 353.536H547.049C547.876 353.536 548.508 353.752 548.945 354.184C549.383 354.616 549.601 355.237 549.601 356.048V356.48C549.601 357.237 549.361 357.805 548.881 358.184C549.756 358.632 550.193 359.488 550.193 360.752V361.28C550.193 362.24 549.943 362.968 549.441 363.464C548.94 363.96 548.212 364.208 547.257 364.208H542.873ZM543.457 363.032H547.257C547.881 363.032 548.329 362.896 548.601 362.624C548.879 362.347 549.017 361.899 549.017 361.28V360.752C549.017 360.133 548.884 359.691 548.617 359.424C548.351 359.152 547.897 359.016 547.257 359.016H543.457V363.032ZM543.457 357.84H547.281C547.703 357.84 547.999 357.72 548.169 357.48C548.34 357.235 548.425 356.901 548.425 356.48V356.048C548.425 355.563 548.321 355.219 548.113 355.016C547.905 354.813 547.551 354.712 547.049 354.712H543.457V357.84Z"
                ></path>
                <path
                  fill="white"
                  d="M553.358 364.208C552.963 364.208 552.766 364.011 552.766 363.616V356.864C552.766 356.475 552.963 356.28 553.358 356.28C553.747 356.28 553.942 356.475 553.942 356.864V357.696C554.246 357.232 554.646 356.88 555.142 356.64C555.643 356.4 556.224 356.28 556.886 356.28C557.28 356.28 557.478 356.475 557.478 356.864C557.478 357.259 557.28 357.456 556.886 357.456C555.952 357.456 555.238 357.643 554.742 358.016C554.246 358.384 553.979 358.888 553.942 359.528V363.616C553.942 364.011 553.747 364.208 553.358 364.208Z"
                ></path>
                <path
                  fill="white"
                  d="M559.704 354.92C559.245 354.92 559.016 354.685 559.016 354.216V353.784C559.016 353.325 559.245 353.096 559.704 353.096H560.136C560.579 353.096 560.8 353.325 560.8 353.784V354.216C560.8 354.685 560.579 354.92 560.136 354.92H559.704ZM559.92 364.208C559.525 364.208 559.328 364.011 559.328 363.616V356.864C559.328 356.475 559.525 356.28 559.92 356.28C560.309 356.28 560.504 356.475 560.504 356.864V363.616C560.504 364.011 560.309 364.208 559.92 364.208Z"
                ></path>
                <path
                  fill="white"
                  d="M567.031 364.208C566.001 364.208 565.244 363.965 564.759 363.48C564.273 362.995 564.031 362.24 564.031 361.216V357.456H563.191C562.796 357.456 562.599 357.259 562.599 356.864C562.599 356.475 562.796 356.28 563.191 356.28H564.031V354.928C564.031 354.533 564.225 354.336 564.615 354.336C565.009 354.336 565.207 354.533 565.207 354.928V356.28H567.103C567.492 356.28 567.687 356.475 567.687 356.864C567.687 357.259 567.492 357.456 567.103 357.456H565.207V361.216C565.207 361.92 565.335 362.4 565.591 362.656C565.852 362.907 566.332 363.032 567.031 363.032C567.223 363.032 567.369 363.08 567.471 363.176C567.572 363.267 567.623 363.413 567.623 363.616C567.623 364.011 567.425 364.208 567.031 364.208Z"
                ></path>
                <path
                  fill="white"
                  d="M572.197 364.208C571.157 364.208 570.386 363.96 569.885 363.464C569.389 362.968 569.141 362.203 569.141 361.168V359.328C569.141 358.277 569.389 357.507 569.885 357.016C570.386 356.52 571.157 356.275 572.197 356.28H573.509C574.549 356.28 575.317 356.528 575.813 357.024C576.309 357.52 576.557 358.288 576.557 359.328V361.152C576.557 362.192 576.309 362.963 575.813 363.464C575.317 363.96 574.549 364.208 573.509 364.208H572.197ZM570.317 361.168C570.317 361.877 570.45 362.365 570.717 362.632C570.983 362.899 571.477 363.032 572.197 363.032H573.509C574.229 363.032 574.719 362.899 574.981 362.632C575.247 362.365 575.381 361.872 575.381 361.152V359.328C575.381 358.608 575.247 358.117 574.981 357.856C574.719 357.589 574.229 357.456 573.509 357.456H572.197C571.717 357.456 571.341 357.512 571.069 357.624C570.797 357.736 570.602 357.928 570.485 358.2C570.373 358.472 570.317 358.848 570.317 359.328V361.168Z"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
     </div>

      {/* AQUI FICA O SEGUNDO CARD */}
     <main className={style.device} >
      {/* <img src={DeviceImg} alt="" /> */}
      
      <div className={style.cellphone}>
            <div className={style.speaker}></div>
            <div className={style.screen}>
                <div className={style.app_grid}>
                    <div className={style.app_icon}>
                    <i className="bi bi-telephone"></i>
                    
                    </div>
                    <div className={style.app_icon}>
                    <i className="bi bi-envelope"></i>
                    </div>
                    <div className={style.app_icon}>
                    <i className="bi bi-camera"></i>
                    </div>
                    <div className={style.app_icon}>
                    <i className="bi bi-gear"></i>
                    </div>
                    <div className={style.app_icon}>
                    <i className="bi bi-music-note"></i>
                    </div>
                    <div className={style.app_icon}>
                    <i className="bi bi-chat"></i>
                    </div>
                  
                </div>
            </div>
            <div className={style.home_button}></div>
        </div>


      </main>
     

    </section>
  );
}

export default UX_Animation;
