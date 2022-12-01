<template>
  <div class="routers">
    <!-- <button @click="getinfo">btn</button> -->
    <div class="contents">
      <div class="user">
        <div class="userheadportrait">
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F503d269759ee3d6d55fb9b21b1467a224f4a21a47082&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667897655&t=ca71b53dc5fe1f2fba94af443ae3713a"
            alt=""
          />
        </div>
        <div class="username">user</div>
        <div class="dynamic">dynamic</div>
        
          <!-- username:<input type="username" name="username" v-model="this.username" /><br>
          password:<input type="password" name="password" v-model="this.password" />
          <input type="file" name="avatar" id="file"/>
          <button @click="upload">btn</button> -->
          <!-- <img src="../public/aae9974ca04467825d554b2a6c05deb7" alt=""> -->
      </div>
      <div class="goods">
        <div class="viedo" @click="btn(1)">视频</div>
        <div class="shop" @click="btn(2)">商品</div>
        <div class="dongtai" @click="btn(3)">动态</div>
      </div>
      <div class="view">
        <div class="viedolist" v-show="num === 1">
          <div class="list">
            <div>最多播放</div>
            <div>按日期</div>
            <div></div>
          </div>
          <div class="viedos">
            <div class="viedoslist">
              <img
                src="https://img1.baidu.com/it/u=1299891960,2505825042&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                alt=""
              />
              <div class="title">这个视频------------------------视频</div>
              <div class="setup">
                <div class="date">10 - 1</div>
                <div class="svg">
                  <svg
                    t="1665408318153"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2557"
                    width="128"
                    height="128"
                  >
                    <path
                      d="M938.666667 138.666667v746.666666a53.393333 53.393333 0 0 1-53.333334 53.333334H138.666667a53.393333 53.393333 0 0 1-53.333334-53.333334V138.666667a53.393333 53.393333 0 0 1 53.333334-53.333334h746.666666a53.393333 53.393333 0 0 1 53.333334 53.333334z m-230.12 342.173333l-266.666667-175.966667A37.333333 37.333333 0 0 0 384 336.033333V688a37.333333 37.333333 0 0 0 57.9 31.16l266.666667-176a37.333333 37.333333 0 0 0 0-62.32z"
                      fill="#2c2c2c"
                      p-id="2558"
                    ></path>
                  </svg>
                  300
                </div>
              </div>
            </div>
            <div class="viedoslist">
              <img
                src="https://img1.baidu.com/it/u=1299891960,2505825042&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                alt=""
              />
              <div class="title">这个视频------------------------视频</div>
              <div class="setup">
                <div class="date">10 - 1</div>
                <div class="svg">
                  <svg
                    t="1665408318153"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2557"
                    width="128"
                    height="128"
                  >
                    <path
                      d="M938.666667 138.666667v746.666666a53.393333 53.393333 0 0 1-53.333334 53.333334H138.666667a53.393333 53.393333 0 0 1-53.333334-53.333334V138.666667a53.393333 53.393333 0 0 1 53.333334-53.333334h746.666666a53.393333 53.393333 0 0 1 53.333334 53.333334z m-230.12 342.173333l-266.666667-175.966667A37.333333 37.333333 0 0 0 384 336.033333V688a37.333333 37.333333 0 0 0 57.9 31.16l266.666667-176a37.333333 37.333333 0 0 0 0-62.32z"
                      fill="#2c2c2c"
                      p-id="2558"
                    ></path>
                  </svg>
                  300
                </div>
              </div>
            </div>
            <div class="viedoslist">
              <img
                src="https://img1.baidu.com/it/u=1299891960,2505825042&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                alt=""
              />
              <div class="title">这个视频------------------------视频</div>
              <div class="setup">
                <div class="date">10 - 1</div>
                <div class="svg">
                  <svg
                    t="1665408318153"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2557"
                    width="128"
                    height="128"
                  >
                    <path
                      d="M938.666667 138.666667v746.666666a53.393333 53.393333 0 0 1-53.333334 53.333334H138.666667a53.393333 53.393333 0 0 1-53.333334-53.333334V138.666667a53.393333 53.393333 0 0 1 53.333334-53.333334h746.666666a53.393333 53.393333 0 0 1 53.333334 53.333334z m-230.12 342.173333l-266.666667-175.966667A37.333333 37.333333 0 0 0 384 336.033333V688a37.333333 37.333333 0 0 0 57.9 31.16l266.666667-176a37.333333 37.333333 0 0 0 0-62.32z"
                      fill="#2c2c2c"
                      p-id="2558"
                    ></path>
                  </svg>
                  300
                </div>
              </div>
            </div>
            <div class="viedoslist">
              <img
                src="https://img1.baidu.com/it/u=1299891960,2505825042&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                alt=""
              />
              <div class="title">这个视频------------------------视频</div>
              <div class="setup">
                <div class="date">10 - 1</div>
                <div class="svg">
                  <svg
                    t="1665408318153"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2557"
                    width="128"
                    height="128"
                  >
                    <path
                      d="M938.666667 138.666667v746.666666a53.393333 53.393333 0 0 1-53.333334 53.333334H138.666667a53.393333 53.393333 0 0 1-53.333334-53.333334V138.666667a53.393333 53.393333 0 0 1 53.333334-53.333334h746.666666a53.393333 53.393333 0 0 1 53.333334 53.333334z m-230.12 342.173333l-266.666667-175.966667A37.333333 37.333333 0 0 0 384 336.033333V688a37.333333 37.333333 0 0 0 57.9 31.16l266.666667-176a37.333333 37.333333 0 0 0 0-62.32z"
                      fill="#2c2c2c"
                      p-id="2558"
                    ></path>
                  </svg>
                  300
                </div>
              </div>
            </div>
            <div class="viedoslist">
              <img
                src="https://img1.baidu.com/it/u=1299891960,2505825042&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                alt=""
              />
              <div class="title">这个视频------------------------视频</div>
              <div class="setup">
                <div class="date">10 - 1</div>
                <div class="svg">
                  <svg
                    t="1665408318153"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2557"
                    width="128"
                    height="128"
                  >
                    <path
                      d="M938.666667 138.666667v746.666666a53.393333 53.393333 0 0 1-53.333334 53.333334H138.666667a53.393333 53.393333 0 0 1-53.333334-53.333334V138.666667a53.393333 53.393333 0 0 1 53.333334-53.333334h746.666666a53.393333 53.393333 0 0 1 53.333334 53.333334z m-230.12 342.173333l-266.666667-175.966667A37.333333 37.333333 0 0 0 384 336.033333V688a37.333333 37.333333 0 0 0 57.9 31.16l266.666667-176a37.333333 37.333333 0 0 0 0-62.32z"
                      fill="#2c2c2c"
                      p-id="2558"
                    ></path>
                  </svg>
                  300
                </div>
              </div>
            </div>
            <div class="viedoslist">
              <img
                src="https://img1.baidu.com/it/u=1299891960,2505825042&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                alt=""
              />
              <div class="title">这个视频------------------------视频</div>
              <div class="setup">
                <div class="date">10 - 1</div>
                <div class="svg">
                  <svg
                    t="1665408318153"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2557"
                    width="128"
                    height="128"
                  >
                    <path
                      d="M938.666667 138.666667v746.666666a53.393333 53.393333 0 0 1-53.333334 53.333334H138.666667a53.393333 53.393333 0 0 1-53.333334-53.333334V138.666667a53.393333 53.393333 0 0 1 53.333334-53.333334h746.666666a53.393333 53.393333 0 0 1 53.333334 53.333334z m-230.12 342.173333l-266.666667-175.966667A37.333333 37.333333 0 0 0 384 336.033333V688a37.333333 37.333333 0 0 0 57.9 31.16l266.666667-176a37.333333 37.333333 0 0 0 0-62.32z"
                      fill="#2c2c2c"
                      p-id="2558"
                    ></path>
                  </svg>
                  300
                </div>
              </div>
            </div>
            <div class="viedoslist">
              <img
                src="https://img1.baidu.com/it/u=1299891960,2505825042&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                alt=""
              />
              <div class="title">这个视频------------------------视频</div>
              <div class="setup">
                <div class="date">10 - 1</div>
                <div class="svg">
                  <svg
                    t="1665408318153"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2557"
                    width="128"
                    height="128"
                  >
                    <path
                      d="M938.666667 138.666667v746.666666a53.393333 53.393333 0 0 1-53.333334 53.333334H138.666667a53.393333 53.393333 0 0 1-53.333334-53.333334V138.666667a53.393333 53.393333 0 0 1 53.333334-53.333334h746.666666a53.393333 53.393333 0 0 1 53.333334 53.333334z m-230.12 342.173333l-266.666667-175.966667A37.333333 37.333333 0 0 0 384 336.033333V688a37.333333 37.333333 0 0 0 57.9 31.16l266.666667-176a37.333333 37.333333 0 0 0 0-62.32z"
                      fill="#2c2c2c"
                      p-id="2558"
                    ></path>
                  </svg>
                  300
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="shoplist" v-show="num === 2">
          <div class="shops">
            <div class="shopslist">
              <img
                src="https://img1.baidu.com/it/u=3236143473,4279662766&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                alt=""
              />
              <div class="title">
                这个商品-----------------------------------商品
              </div>
              <div class="price">￥99</div>
            </div>
            <div class="shopslist">
              <img
                src="https://img1.baidu.com/it/u=3236143473,4279662766&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                alt=""
              />
              <div class="title">
                这个商品-----------------------------------商品
              </div>
              <div class="price">￥99</div>
            </div>
            <div class="shopslist">
              <img
                src="https://img1.baidu.com/it/u=3236143473,4279662766&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                alt=""
              />
              <div class="title">
                这个商品-----------------------------------商品
              </div>
              <div class="price">￥99</div>
            </div>
            <div class="shopslist">
              <img
                src="https://img1.baidu.com/it/u=3236143473,4279662766&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                alt=""
              />
              <div class="title">
                这个商品-----------------------------------商品
              </div>
              <div class="price">￥99</div>
            </div>
            <div class="shopslist">
              <img
                src="https://img1.baidu.com/it/u=3236143473,4279662766&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                alt=""
              />
              <div class="title">
                这个商品-----------------------------------商品
              </div>
              <div class="price">￥99</div>
            </div>
          </div>
        </div>
        <div class="dongtailist" v-show="num === 3">
          <div class="dongtais">
            <div class="dongtaislist">
              <div class="msg">a</div>
              <div class="data">
                <div class="time">10-1</div>
                <div class="comment">
                  <svg
                    t="1665471468055"
                    class="icon"
                    viewBox="0 0 1058 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="5999"
                    width="128"
                    height="128"
                  >
                    <path
                      d="M330.744242 885.372121l194.779798-129.861818 16.665859-11.106263h383.844848c36.486465 0 66.19798-29.659798 66.19798-66.146262v-529.19596c0-36.434747-29.711515-66.107475-66.19798-66.107475H132.305455c-36.486465 0-66.146263 29.659798-66.146263 66.107475v529.19596c0 36.486465 29.659798 66.146263 66.146263 66.146262h198.438787v140.968081m-66.146262 123.578182V810.550303H132.305455c-73.024646 0-132.305455-59.216162-132.305455-132.292525v-529.19596C0 76.024242 59.267879 16.808081 132.305455 16.808081h793.742222c73.076364 0 132.357172 59.216162 132.357171 132.240808v529.195959c0 73.076364-59.267879 132.292525-132.357171 132.292526h-363.830303L264.59798 1008.950303z m0 0"
                      p-id="6000"
                      fill="#2c2c2c"
                    ></path>
                  </svg>
                  <div class="commentlength">{{ this.comment }}</div>
                </div>
                <div class="increas" @click="increas">
                  <svg
                    t="1665471323126"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2569"
                    width="128"
                    height="128"
                  >
                    <path
                      d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z"
                      p-id="2570"
                      fill="#2c2c2c"
                    ></path>
                  </svg>
                  <div class="increaslength">{{ this.increasNum }}</div>
                </div>
              </div>
            </div>
            <div class="dongtaislist">
              <div class="msg">a</div>
              <div class="data">
                <div class="time">10-1</div>
                <div class="comment">
                  <svg
                    t="1665471468055"
                    class="icon"
                    viewBox="0 0 1058 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="5999"
                    width="128"
                    height="128"
                  >
                    <path
                      d="M330.744242 885.372121l194.779798-129.861818 16.665859-11.106263h383.844848c36.486465 0 66.19798-29.659798 66.19798-66.146262v-529.19596c0-36.434747-29.711515-66.107475-66.19798-66.107475H132.305455c-36.486465 0-66.146263 29.659798-66.146263 66.107475v529.19596c0 36.486465 29.659798 66.146263 66.146263 66.146262h198.438787v140.968081m-66.146262 123.578182V810.550303H132.305455c-73.024646 0-132.305455-59.216162-132.305455-132.292525v-529.19596C0 76.024242 59.267879 16.808081 132.305455 16.808081h793.742222c73.076364 0 132.357172 59.216162 132.357171 132.240808v529.195959c0 73.076364-59.267879 132.292525-132.357171 132.292526h-363.830303L264.59798 1008.950303z m0 0"
                      p-id="6000"
                      fill="#2c2c2c"
                    ></path>
                  </svg>
                  <div class="commentlength">{{ this.comment }}</div>
                </div>
                <div class="increas" @click="increas">
                  <svg
                    t="1665471323126"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2569"
                    width="128"
                    height="128"
                  >
                    <path
                      d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z"
                      p-id="2570"
                      fill="#2c2c2c"
                    ></path>
                  </svg>
                  <div class="increaslength">{{ this.increasNum }}</div>
                </div>
              </div>
            </div>
            <div class="dongtaislist">
              <div class="msg">a</div>
              <div class="data">
                <div class="time">10-1</div>
                <div class="comment">
                  <svg
                    t="1665471468055"
                    class="icon"
                    viewBox="0 0 1058 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="5999"
                    width="128"
                    height="128"
                  >
                    <path
                      d="M330.744242 885.372121l194.779798-129.861818 16.665859-11.106263h383.844848c36.486465 0 66.19798-29.659798 66.19798-66.146262v-529.19596c0-36.434747-29.711515-66.107475-66.19798-66.107475H132.305455c-36.486465 0-66.146263 29.659798-66.146263 66.107475v529.19596c0 36.486465 29.659798 66.146263 66.146263 66.146262h198.438787v140.968081m-66.146262 123.578182V810.550303H132.305455c-73.024646 0-132.305455-59.216162-132.305455-132.292525v-529.19596C0 76.024242 59.267879 16.808081 132.305455 16.808081h793.742222c73.076364 0 132.357172 59.216162 132.357171 132.240808v529.195959c0 73.076364-59.267879 132.292525-132.357171 132.292526h-363.830303L264.59798 1008.950303z m0 0"
                      p-id="6000"
                      fill="#2c2c2c"
                    ></path>
                  </svg>
                  <div class="commentlength">{{ this.comment }}</div>
                </div>
                <div class="increas" @click="increas">
                  <svg
                    t="1665471323126"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2569"
                    width="128"
                    height="128"
                  >
                    <path
                      d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z"
                      p-id="2570"
                      fill="#2c2c2c"
                    ></path>
                  </svg>
                  <div class="increaslength">{{ this.increasNum }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Usercentent",
  data() {
    return {
      num: 1,
      increasNum: 1,
      increas1: 0,
      comment: 1,
      username:'',
      password:''
    };
  },
  methods: {
    btn(num) {
      this.num = num;
    },
    increas() {
      if (this.increas1 == 1) {
        this.increasNum--;
        this.increas1 = 0;
      } else {
        this.increasNum++;
        this.increas1 = 1;
      }
    },
    upload(){
      const avatar = document.querySelector('#file').files[0]
      const formsdata = new FormData()
      formsdata.append("username",this.username)
      formsdata.append("password",this.password)
      formsdata.append("avatar",avatar)

      axios.post("/api/apis/user/add",formsdata,{
        headers:{
          'Content-Type':'multipart/form-data'
        }
      }).then(res=>{
        console.log(res)
      })
    }
  },
};
</script>

<style scoped lang="less">
.routers {
  width: 1177px;
  min-width: 1177px;
  height: 705px;
  overflow-x: hidden;
  .contents {
    max-width: 1177px;
    width: 1177px;
    // max-height: 79vh;
    // height: 79vh;
    display: flex;
    flex-wrap: wrap;
    // overflow: hidden;
    .user {
      width: 100%;
      height: 170px;
      // background-color: aqua;
      display: block;
      .username {
        font-size: 25px;
        float: right;
        margin: 50px 45px 0 0;
      }
      .userheadportrait {
        width: 130px;
        height: 130px;
        float: right;
        margin: 3px 155px 0 0;
        border: 1px solid white;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .dynamic {
        float: right;
        position: relative;
        left: 39px;
        top: 109px;
      }
    }
    .goods {
      width: 100%;
      height: 45px;
      display: flex;
      justify-content: space-around;
      // background-color: tan;
      line-height: 53px;
      border-bottom: 1px solid palegoldenrod;
    }
    .view {
      width: 100%;
      // height: 383px;
      background-color: rgb(237, 235, 235);
      display: flex;
      justify-content: center;
      .viedolist {
        width: 100%;
        // height: 350px;
        // background-color: aqua;
        display: flex;
        // justify-content: center;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
        .list {
          width: 80%;
          height: 30px;
          // background-color: plum;
          display: flex;
          justify-content: space-around;
          font-size: 13px;
          margin-top: 5px;
        }
        .viedos {
          width: 900px;
          height: 550px;
          // background-color: white;
          margin-top: 9px;
          // display: flex;
          // flex-wrap: wrap;
          // box-sizing: border-box;
          .viedoslist {
            width: 710px;
            height: 190px;
            background-color: white;
            display: block;
            // align-items: center;
            // justify-content: center;
            // flex-wrap: wrap;
            // margin-right:19px;
            margin: 0 7px 19px 7px;
            box-sizing: border-box;
            overflow: hidden;
            img {
              width: 195px;
              height: 135px;
              border-radius: 5px;
              float: left;
              position: relative;
              top: 13px;
              left: 13px;
            }
            .title {
              width: 450px;
              height: 39px;
              text-align: left;
              overflow: hidden;
              font-size: 15px;
              float: right;
              position: relative;
              top: 57px;
              // left:0px;
              right: 35px;
              // background-color: aqua;
            }
            .setup {
              width: 100%;
              height: 39px;
              font-size: 12px;
              display: flex;
              align-items: center;
              justify-content: space-around;
              transform: translateY(15px);
              .svg {
                width: 50px;
                height: 19px;
                display: flex;
                .icon {
                  width: 15px;
                  position: relative;
                  top: -55px;
                }
              }
              .date {
                // position: relative;
                // left: 115px;
              }
            }
          }
          .viedoslist:hover {
            cursor: pointer;
          }
        }
      }
      .shoplist {
        width: 100%;
        // height: 350px;
        display: flex;
        // justify-content: center;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
        .shops {
          width: 900px;
          // height: 550px;
          margin-top: 9px;
          // display: flex;
          // flex-wrap: wrap;
          // box-sizing: border-box;
          .shopslist {
            width: 270px;
            height: 210px;
            margin: 15px 15px 9px 15px;
            display: inline-block;
            justify-content: center;
            flex-wrap: wrap;
            img {
              width: 95%;
              height: 73%;
              border-radius: 5px;
            }
            .title {
              width: 95%;
              height: 39px;
              font-size: 15px;
              overflow: hidden;
            }
            .price {
              width: 95%;
              font-size: 13px;
            }
          }
        }
      }
      .dongtailist {
        width: 100%;
        height: 350px;
        display: flex;
        // justify-content: center;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
        .dongtais {
          width: 900px;
          // height: 550px;
          margin-top: 9px;
          display: flex;
          flex-wrap: wrap;
          box-sizing: border-box;
          .dongtaislist {
            width: 900px;
            // height: 90px;
            // background-color: tan;
            margin: 9px 0 15px 0;
            border: 1px solid rgb(205, 203, 203);
            border-radius: 5px;
            background-color: white;
            display: flex;
            flex-wrap: wrap;
            .msg {
              width: 830px;
              margin: 9px auto;
              // position:relative;
              // left: 50%;
              // transform: translateX(-50%);
            }
            .data {
              width: 100%;
              height: 30px;
              display: flex;
              justify-content: right;
              .time {
                margin: 0px 30px 0 0;
              }
              .icon {
                width: 19px;
                position: relative;
                top: -53px;
                margin: 0 5px 0 0;
              }
              .increas {
                display: flex;
                margin: 0px 9px 0 9px;
              }
              .comment {
                display: flex;
                margin: 0px 9px 0 13px;
              }
              .time,
              .increas,
              .comment {
                font-size: 15px;
              }
              .increas,
              .comment:hover {
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
}
</style>