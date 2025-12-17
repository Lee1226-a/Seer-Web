<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/SeerLogin.png">-->
<!--    <HelloWorld msg="我是你爹"/>-->
<!--    <div id="main"  ref="myChart" style="width: 600px;height:400px; "></div>-->
<EarthBackground>
  <div class="content">
    <div id="loginD1">
      <div class="loginBox" >

<!--        <p  class="font-sample" style="font-family: 'Space Grotesk', sans-serif;">系统登录</p>-->
        <!--        model属性，表示表单绑定的数据，是一个对象-->
        <!--        rules属性：使用该属性绑定表单验证规则，配合form-item的prop属性使用-->
        <!--        ref属性：可以通过这个属性获取整个表单，比如在表单提交或者表单重置时使用这个属性-->
        <el-form :model="loginForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" >
          <el-form-item  prop="account">
            <i class="el-icon-user custom-icon"></i>
            <el-input  v-model="loginForm.account" style="width: 260px;"></el-input>
          </el-form-item>
          <el-form-item  prop="password">
            <!--                添加show-password属性可以将文本框渲染为密码框-->
            <i class="el-icon-unlock custom-icon"></i>
            <el-input  v-model="loginForm.password" show-password  style="width: 260px;"></el-input>
          </el-form-item>
          <el-form-item>
<!--            <el-button type="primary" @click="login('ruleForm')">登录</el-button>-->
<!--            <el-link type="info" @click="open" :underline="false">忘记密码？</el-link>-->
          </el-form-item>

        </el-form>
      </div>
    </div>
  </div>
</EarthBackground>
  </div>
</template>

<script>

// @ is an alias to /srcs
import HelloWorld from '@/components/HelloWorld.vue';
import EarthBackground from '@/components/EarthBackgroud.vue';



export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    EarthBackground
  },

  mounted() {

  },

  data() {
    return {
      loginForm: {
        account: "",
        password: ""
      },
      //标单验证规则
      rules: {
        //表单验证规则key值，即uname要和form-item的prop属性一致，表示为哪一项添加表单验证
        account: [
          //required: true,表示该项时必填项
          //message: '请输入活动名称',当不满足验证规则时给用户的提示语
          //trigger: 'blur'，触发时机，blur失去焦点时触发
          {required: true, message: '', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '', trigger: 'blur'},
        ]
      }
    }
  },
  methods: {

  }
}

</script>

<style scoped>
.content {
  color: white;
  text-align: center;
  padding-top: 20vh;
  display: flex;

}
.loginBox{
  width:450px;
  height: 400px;
  margin: auto auto;
  padding-top: 160px;
  padding-right: 50px;
  border-radius:10%;
  line-height: 70px;
  //padding-right: 20px;
  justify-content: center; /* 水平居中 */
  background-color: rgba(2, 2, 4, 0); /* 最后一位是透明度值 */
  color: rgba(0, 0, 0, 0.8); /* 文本透明 */
  border: 2px solid rgba(0, 128, 0, 0); /* 边框透明 */

}
#loginD1{
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center; /* 水平居中 */
  align-items: center;    /* 垂直居中 */
  background-size: cover;

}

::v-deep .el-input__inner {
  background-color: rgba(2, 2, 4, 0.1); /* 最后一位是透明度值 */
  border: 2px solid rgba(0, 128, 0, 0.3); /* 边框透明 */
  color: rgba(255,255, 255, 0.8); /* 文本透明 */

  text-shadow:
      0 0 5px #fff,
      0 0 10px #ff3300,
      0 0 15px #ff6600,
      0 0 20px #ff9900;
  color: #fff;

}


.custom-icon {
  text-shadow:
      0 0 5px #fff,
      0 0 10px #ff3300,
      0 0 15px #ff6600,
      0 0 20px #ff9900;

  color: #fff;
  font-size: 30px;
  position: absolute;
  top: 3px;
  right:290px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary: #4e54c8;
  --secondary: #8f94fb;
  --dark: #141e30;
  --light: #f8f9fd;
  --accent: #ff6b6b;
}

body {
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(135deg, var(--dark), #243b55);
  color: var(--light);
  min-height: 100vh;
  line-height: 1.6;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
}

header {
  text-align: center;
  padding: 40px 0;
  margin-bottom: 50px;
  position: relative;
  overflow: hidden;
}

.title-box {
  background: rgba(30, 30, 46, 0.7);
  border-left: 5px solid var(--accent);
  padding: 30px;
  border-radius: 0 20px 20px 0;
  margin: 40px 0;
  backdrop-filter: blur(10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 15px;
  background: linear-gradient(45deg, #ff6b6b, #4e54c8, #8f94fb);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 2px;
}

.subtitle {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 400;
  font-style: italic;
  color: #d1d6ff;
  margin-bottom: 25px;
}

.intro {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #c5c8e4;
  line-height: 1.8;
}

.font-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.font-card {
  background: rgba(25, 25, 40, 0.8);
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.font-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
}

.font-name {
  font-size: 1.8rem;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid var(--accent);
  color: var(--accent);
  font-weight: 600;
}

.font-sample {
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 40px;

  line-height: 1.3;
  flex-grow: 1;
  text-shadow:
      0 0 5px #fff,
      0 0 10px #ff3300,
      0 0 15px #ff6600,
      0 0 20px #ff9900,
      2px 2px 4px rgba(0,0,0,0.5);
  color: #fff;
  //display: flex;
  //align-items: center;
  //min-height: 180px;
}

.font-styles {
  background: rgba(20, 20, 35, 0.6);
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
}

.style-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
}

.style-name {
  color: #a5a9c8;
}

.font-usage {
  margin-top: 20px;
  font-size: 0.9rem;
  color: #b0b3d8;
}

.vue-integration {
  background: rgba(30, 30, 46, 0.8);
  border-radius: 15px;
  padding: 40px;
  margin: 50px 0;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.vue-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
  color: #8f94fb;
  font-weight: 700;
  letter-spacing: 1px;
}

.code-block {
  background: #1a1a2e;
  border-radius: 10px;
  padding: 25px;
  font-family: 'Space Grotesk', monospace;
  font-size: 1rem;
  line-height: 1.7;
  margin: 20px 0;
  border-left: 4px solid var(--accent);
  overflow-x: auto;
}

.dynamic-text {
  text-align: center;
  margin: 40px auto;
  padding: 30px;
  background: rgba(20, 20, 35, 0.6);
  border-radius: 15px;
  max-width: 800px;
}

.dynamic-title {
  font-family: 'Poppins', sans-serif;
  font-size: 2.8rem;
  margin-bottom: 20px;
  color: #ffd166;
  font-weight: 600;
}

.dynamic-subtitle {
  font-family: 'Dancing Script', cursive;
  font-size: 2.2rem;
  color: #a5a9c8;
  margin-top: 15px;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 25px 0;
}

button {
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  border: none;
  padding: 12px 25px;
  border-radius: 30px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 5px 15px rgba(79, 84, 200, 0.4);
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(79, 84, 200, 0.6);
}

footer {
  text-align: center;
  padding: 40px 0;
  margin-top: 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #a5a9c8;
}

.footer-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-style: italic;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.8rem;
  }

  .subtitle {
    font-size: 1.5rem;
  }

  .font-sample {
    font-size: 2rem;
  }

  .dynamic-title {
    font-size: 2.2rem;
  }

  .vue-title {
    font-size: 2rem;
  }
}
</style>
