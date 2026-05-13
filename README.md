<img height="100" alt="hyperexecute_logo" src="https://user-images.githubusercontent.com/1688653/159473714-384e60ba-d830-435e-a33f-730df3c3ebc6.png">

HyperExecute is a smart test orchestration platform to run end-to-end BiDi tests at the fastest speed possible. HyperExecute lets you achieve an accelerated time to market by providing a test infrastructure that offers optimal speed, test orchestration, and detailed execution logs.

The overall experience helps teams test code and fix issues at a much faster pace. HyperExecute is configured using a YAML file. Instead of moving the Hub close to you, HyperExecute brings the test scripts close to the Hub!

* <b>HyperExecute HomePage</b>: https://www.testmuai.com/hyperexecute
* <b>TestMu AI HomePage</b>: https://www.testmuai.com
* <b>TestMu AI Support</b>: [support@testmuai.com](mailto:support@testmuai.com)

To know more about how HyperExecute does intelligent Test Orchestration, do check out [HyperExecute Getting Started Guide](https://www.testmuai.com/support/docs/getting-started-with-hyperexecute/)

# How to run BiDi tests on HyperExecute — TestMu AI (Formerly LambdaTest)

* [Pre-requisites](#pre-requisites)
   - [Download HyperExecute CLI](#download-hyperexecute-cli)
* [Configure YAML File](#configure-yaml-in-your-test-suite)
* [Execute your Test Suite](#execute-your-test-suite)
* [Navigation in Automation Dashboard](#navigation-in-automation-dashboard)

## Pre-requisites

Before using HyperExecute, you have to download HyperExecute CLI corresponding to the host OS. Along with it, you also need to export the environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [TestMu AI Profile](https://accounts.lambdatest.com/detail/profile) page.

### Download HyperExecute CLI

HyperExecute CLI is the CLI for interacting and running the tests on the HyperExecute Grid. The CLI provides a host of other useful features that accelerate test execution. In order to trigger tests using the CLI, you need to download the HyperExecute CLI binary corresponding to the platform (or OS) from where the tests are triggered:

Also, it is recommended to download the binary in the project's parent directory. Shown below is the location from where you can download the HyperExecute CLI binary:

* Mac: https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute
* Linux: https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute
* Windows: https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe

## Configure YAML in your Test Suite

Enter your relative app and test suite path for the `appPath` and `testSuitePath` flags in the YAML file. This YAML file is present in the root directory of this sample repository.

```yaml
---
version: 0.1
autosplit: true

concurrency: 2
runson: linux

runtime:
  language: node
  version: 18

pre:
  - npm install

testDiscoveryCommand:
  mode: static
  type: raw
  command: ls "test/specs/*.spec.js"

testRunnerCommand: npx wdio wdio.lambdatest.conf.js --spec=test/specs/*.spec.js

jobLabel: [HyperExecute, BiDi, Linux]
```

## Execute your Test Suite

NOTE: In case of macOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config <path_of_yaml_file>
```

e.g.

```bash
./hyperexecute --user user1 --key abcd12345 --config yaml/hyperexecute-linux.yaml
```

## Navigation in Automation Dashboard

HyperExecute lets you navigate from/to *Test Logs* in Automation Dashboard from/to *HyperExecute Logs*. You also get relevant get relevant BiDi test details like video, network log, commands, Exceptions & more in the Dashboard. Effortlessly navigate from the automation dashboard to HyperExecute logs (and vice-versa) to get more details of the test execution.

Visit the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 

## TestMu AI Community :busts_in_silhouette:

The [TestMu AI Community](https://community.testmuai.com/) allows people to interact with tech enthusiasts. Connect, ask questions, and learn from tech-savvy people. Discuss best practises in web development, testing, and DevOps with professionals from across the globe.

## Documentation & Resources :books:
      
If you want to learn more about the TestMu AI's features, setup, and usage, visit the [TestMu AI documentation](https://www.testmuai.com/support/docs/). You can also find in-depth tutorials around test automation, mobile app testing, responsive testing, manual testing on [TestMu AI Blog](https://www.testmuai.com/blog/) and [TestMu AI Learning Hub](https://www.testmuai.com/learning-hub/).     
      
 ## About TestMu AI

[TestMu AI](https://www.testmuai.com) is a leading test execution and orchestration platform that is fast, reliable, scalable, and secure. It allows users to run both manual and automated testing of web and mobile apps across 3000+ different browsers, operating systems, and real device combinations. Using TestMu AI, businesses can ensure quicker developer feedback and hence achieve faster go to market. Over 500 enterprises and 1 Million + users across 130+ countries rely on TestMu AI for their testing needs.

[<img height="70" src="https://user-images.githubusercontent.com/70570645/169649126-ed61f6de-49b5-4593-80cf-3391ca40d665.PNG">](https://accounts.lambdatest.com/register)
      
## We are here to help you :headphones:

* Got a query? we are available 24x7 to help. [Contact Us](mailto:support@testmuai.com)
* For more info, visit - https://www.testmuai.com

## 🚀 LambdaTest is Now TestMu AI

👋 Welcome to TestMu AI, the next evolution of LambdaTest. As of January 2026, [LambdaTest is Now TestMu AI](https://www.testmuai.com/lambdatest-is-now-testmuai/) - we have evolved from a cross-browser testing cloud into a unified, AI-native quality engineering platform designed for the modern DevOps era.

Whether you have been part of the LambdaTest community for years or are just discovering TestMu AI, our mission remains the same: to help you ship faster with high-scale test execution, autonomous testing, and deep quality analytics.

### 🔄 Our Rebrand Journey

In 2017, we introduced LambdaTest with a clear mission: to become the world's most trusted cloud testing platform. We built a scalable, high-performance test cloud that eliminated flakiness, improved developer feedback cycles, and accelerated release velocity for teams worldwide.

As LambdaTest grew, we expanded the platform into Test Intelligence, Visual Regression Testing, Accessibility Testing, API Testing, and Performance Testing, covering the entire testing lifecycle. These capabilities enabled teams to test any stack, on any technology, at enterprise scale.

Over time, we rebuilt the architecture to be AI-native from the ground up. What began as LambdaTest's high-performance testing cloud has now evolved into TestMu AI, an AI-native, multi-agent platform redefining modern quality engineering.

We chose the name TestMu AI to reflect our shift towards intelligent, autonomous testing. While our identity has changed, our core technology and commitment to the testing community stay the same.

👉 Find [LambdaTest's New Home](https://www.testmuai.com/).

### 🔭 Explore TestMu AI

The same infrastructure LambdaTest customers relied on, now delivered through autonomous AI agents.

- [KaneAI](https://www.testmuai.com/kane-ai/)
- [Agent-to-Agent Testing](https://www.testmuai.com/agent-to-agent-testing/)
- [HyperExecute](https://www.testmuai.com/hyperexecute/)
- [Real Device Cloud](https://www.testmuai.com/real-device-cloud/)
- [Pricing](https://www.testmuai.com/pricing/)
- [Documentation](https://www.testmuai.com/support/docs/)