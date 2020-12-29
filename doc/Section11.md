# Section11:Push通知を送る

<a id = "contents">

# Contents
* [Flow](#flow)

### Pickup
* 


<a id = "flow">

## Flow
* ![Image](../src/Section11/images/init001.png)
* ![Image](../src/Section11/images/init002.png)
* ![Image](../src/Section11/images/init003.png)
* ![Image](../src/Section11/images/init004.png)
* ![Image](../src/Section11/images/init005.png)
* ![Image](../src/Section11/images/init006.png)
* ![Image](../src/Section11/images/init007.png)
* ![Image](../src/Section11/images/init008.png)
* ![Image](../src/Section11/images/init009.png)
* ![Image](../src/Section11/images/init010.png)

* commands
  * try push
    ```
    curl -H "Content-Type: application/json" -X POST "https://exp.host/--/api/v2/push/send" -d '{
    "to": "ExponentPushToken[2ciKg3CUo0siHOisqu9SUK]",
    "title":"hello",
    "body": "world"
    }'
    ```
* install @functions
  ```
  yarn add expo-server-sdk
  ```

## Pickup
* [Push Notifications Overview](https://docs.expo.io/push-notifications/overview/)
* [expo-server-sdk-node](https://www.npmjs.com/package/expo-server-sdk)

### [Return to Contents](#contents)