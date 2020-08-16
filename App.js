import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image,  } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>How to Implement Beautiful React Native Charts</Text>
        </View>
          <Text style={styles.paragraph}>In this tutorial, you will learn how to implement 
            React Native Charts in your mobile app projects. In order to add chart visuals to a mobile app, 
            we are going to use the react-native-chart-kit library, which provides us 
            with the ability to add stunning charts to our React native apps. With this 
            charts library, you can create line charts, Bezier line charts, Pie charts, 
            Bar charts, Progress charts, and Contribution graphs. The library provides 
            a Charts API that is easy to use, responsive, easy to plug-in and highly 
            customizable.
          </Text>
            <View style={styles.div}>
              <Image source={require('./assets/mobileAppCharts.png')} style={styles.pic} />
            </View>
            <Text style={styles.paragraph}>Charts are beautiful visual components, that highly boost the look and feel of your mobile app. 
              By leveraging charts as a design tool, you make your React Native app more beautiful, while also 
              boosting the user experience. Charts are easy to read and efficiently convey data stories. Rather 
              than using tables full of data, your app’s storytelling means are way more powerful with React 
              Native Charts components.
            </Text>
            <Text style={styles.paragraph}>So what types of app ideas can take full advantage of the React Native Charts library? 
              utilities, charts can be extremely powerful for 
              some features. Even Instagram contains a few charts, such as the time spent graph.Well, it turns out there’s a huge variety of app 
              categories that can skyrocket the user experience by using beautiful 
              charts. The obvious categories would be business dashboard apps, finance apps, mobile banking apps, analytics apps, e-commerce apps, 
              health apps, and fitness apps. But even in mobile spaces such as social networks or 
            </Text>
            <Text style={styles.paragraph}>From business metrics to fitness activity, React Native Charts convey a ton of stories, 
              in a restricted real estate, which makes them perfect for phone apps. Without further ado, let’s jump right into how we 
              can leverage React Native Charts, to build better mobile apps.
            </Text>
            <Text style={styles.caption}>
              Installing React Native Charts Kit
            </Text>
            <Text style={styles.paragraph}>
              In the first step of adding charts into a mobile app, we need to install the react-native-chart-kit npm package into our 
              existing React Native project. You can do so by using NPM or yarn.
            </Text>
            <Text style={styles.instruction}>
              Using NPM:
            </Text>
            <Text style={styles.code}>
              npm install react-native-chart-kit
            </Text>
            <Text style={styles.instruction}>
              Using YARN:
            </Text>
            <Text style={styles.code}>
              yarn add react-native-chart-kit
            </Text>
            <Text style={styles.caption}>
              Importing Charts components into React Native
            </Text>
            <Text style={styles.paragraph}>
              In order to have all the Charts APIs available in React Native, we need to import the package that we’ve just integrated 
              in the project. You can do so by using the following piece of code:
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample1.png')} style={styles.picCode} />
            </View>
            <Text style={styles.paragraph}>
              That’s it. Now you get access to various chart types, which are accessible from your JavaScript code.
            </Text>
            <Text style={styles.caption}>
              Creating a Line Chart in React Native
            </Text>
            <Text style={styles.paragraph}>
              After the importing of our charts plugin successfully, we are going to create a line chart in React Native. 
              As we have already imported all the chart components in the previous step, we just need to supply the data 
              to the built-in line chart component as follows:
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample2.png')} style={styles.picCode} />
            </View>
            <Text style={styles.paragraph}>
              The code above represents the dataset for our line chart component, that will be displayed in a line chart 
              view, in our project. As you can notice, for the scope of this tutorial, we are using hardcoded static data. 
              In most projects, this data will be previously fetched from a server or local database. But for learning purposes, 
              we should be good with mock data for now.
            </Text>
            <Text style={styles.paragraph}>
              Now that we have the data we want to show to your users, we are going to use the LineChart component imported 
              from our React Native Charts plugin. The code snippet to implement the line chart with our chart dataset and 
              other properties is given below. You can customize the properties such as height, width, axis-labels, chart 
              configs, etc to your liking. Check out the documentation to learn more about all the customizations you can 
              do to a line chart.
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample3.png')} style={styles.picCodeBig} />
            </View>
            <Text style={styles.paragraph}>
              Run your projects and open the screen containing the newly added line chart. As a result, you will get the line chart 
              shown in the following screenshot:
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample4.png')} style={styles.picCodeMed} />
            </View>
            <Text style={styles.paragraph}>
              Line charts can be used for displaying various metrics and their evolution over time. A few examples of line charts used 
              across the mobile app industry: cashflow statistics, currency rates over time, Bitcoin price, stock prices, calorie burn 
              statistics, BMI progress, revenue, sales, margins, etc.
            </Text>
            <Text style={styles.caption}>
            Making a Bar Chart in React Native
            </Text>
            <Text style={styles.paragraph}>
              As you’ve probably anticipated already, we are going to use a BarChart component that we import from the react-native-chart-kit 
              plugin. The chart dataset we are going to supply to the BarChart component is exactly the same as that of the line chart represented 
              by the barData object here. Notice how the bar chart displays the data in comparison to the line chart. The React Native code snippet 
              for the chart dataset is provided below:
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample5.png')} style={styles.picCode} />
            </View>
            <Text style={styles.paragraph}>
              The code snippet to implement the bar chart using our chart dataset and other UI tweaks is given below. You can customize the properties 
              such as height, width, axis-labels, chart configs, etc to your liking. Here’s the code example:
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample6.png')} style={styles.picCode} />
            </View>
            <Text style={styles.paragraph}>
              Pretty straightforward, right? As a result, you will get the following bar chart:
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample7.png')} style={styles.picCodeMed} />
            </View>
            <Text style={styles.paragraph}>
              You can use bar charts to visualize and compare data that are grouped in different categories or over longer time windows (such as months, years). 
              This includes examples such as budget spending categories, revenue per country, sales per month, profit per year, etc.
            </Text>
            <Text style={styles.caption}>
              Creating Pie Charts in React Native
            </Text>
            <Text style={styles.paragraph}>
              Similarly, we are going to use a PieChart component that is included in the react-native-chart-kit plugin. We are going to build a hardcoded pieData, 
              which is the pie chart dataset that will be shown in the visual graph The advantage of using pie chart in React native is that you can display 
              statistics of multiple dimensions of data which is not possible in a line or bar chart. Here’s the code snippet for the pie chart dataset:
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample8.png')} style={styles.picCodeBig} />
            </View>
            <Text style={styles.paragraph}>
              The source code implementing the pie chart backed by our pieData dataset is illustrated below. You can customize styling properties such as height, 
              width, axis-labels, chart configs, etc. Here’s the React Native code:
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample9.png')} style={styles.picCode} />
            </View>
            <Text style={styles.paragraph}>
              As a result, you will get the pie chart with index labels represented by the following screenshot:
            </Text>
            <View style={styles.div}>
              <Image source={require('./assets/codeSample10.png')} style={styles.picCodeMed} />
            </View>
            <Text style={styles.paragraph}>
              You can use Pie Charts in your React Native app to display categorized data and compare category volumes between each other. For example, an 
              investment app might use a pie chart to show the portfolio diversification or the money spending categories. An analytics app might display 
              the traffic volume per acquisition channel (SEO, Ads, Direct, E-mail, etc) in a pie chart. You get the idea.
            </Text>
            <Text style={styles.caption}>
              Bottom Line
            </Text>
            <Text style={styles.paragraph}>
              Adding React Native Charts into a mobile app is pretty straightforward if you leverage the open source react-native-chart-kit. Given they don’t 
              require a lot of development effort, it’s usually a great idea to delight your app users with beautiful rich graphs. Charts significantly boost 
              the user experience and will make your app stand out from the crowd.
            </Text>
            <Text style={styles.paragraph}>
              We highly recommend you to play around with everything the react-native-chart-kit library has to offer. Try to build beautiful experiences, with 
              matching colors and don’t forget that amazing your users is the top priority of any React Native developer. We can’t wait to see everything you’re 
              going to build with this tutorial.
            </Text>
            <Text style={styles.caption}>
              Happy Coding!
            </Text>


            
            
          <StatusBar style="auto" />
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bec200',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  header: {
    fontFamily: 'Impact, Charcoal, sans-serif',
    textAlign: 'center',
    backgroundColor: '#9796b0',
  },
  title: {
    fontFamily: 'Impact, Charcoal, sans-serif',
    fontSize: 66,
    color: '#00f',
  },
  paragraph: {
    fontFamily: 'Georgia, serif',
    fontSize: 25,
    color: 'fff',
    textAlign: 'justify',
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
  },
  div: {
    alignItems: 'center'
  },
  pic: {
    height: 500,
    width: 500,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
  },
  picCode: {
    height: 200,
    width: 800,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
  },
  picCodeMed: {
    height: 350,
    width: 800,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
  },
  picCodeBig: {
    height: 580,
    width: 800,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
  },
  caption: {
    fontFamily: 'fantasy',
    fontSize: 33,
    color: '#00f',
    marginBottom: 5,
  },
  instruction: {
    fontFamily: 'fangsong',
    fontSize: 25,
    color: '#00f',
    marginBottom: 5,
  },
  code: {
    fontSize: 20,
    color: '#00f',
    backgroundColor: '#DCDCDC',
  },
});
