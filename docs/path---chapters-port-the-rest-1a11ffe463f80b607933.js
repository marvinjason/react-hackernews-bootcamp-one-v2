webpackJsonp([0xdac92f0d8251],{341:function(n,a){n.exports={data:{markdownRemark:{html:'<h1>Port The Rest</h1>\n<p>This chapter will guide you towards porting the rest of the app to react-native. But the work will be mostly self taught.</p>\n<h2>Making the <code class="language-text">Article</code>\'s link</h2>\n<p>React Native doesnt have a link component unfortunately, but we can use a \'pressable\' component with the <code class="language-text">Linking</code> utility.</p>\n<p>Lets look at <code class="language-text">TouchOpacity</code>. Docs <a href="https://facebook.github.io/react-native/docs/touchableopacity.html">here</a>. The docs point out that the <code class="language-text">TouchableOpacity</code> component can be used as a wrapper for making a view respond to touches. Lets use this to trigger our <code class="language-text">Articles</code> link functionality. We should wrap our Articles root <code class="language-text">View</code> component in a <code class="language-text">TouchableOpacity</code> and assign a <code class="language-text">onPress</code> handler to it. It can do nothing for now though.</p>\n<p>Now lets look at <code class="language-text">Linking</code>. Docs <a href="https://facebook.github.io/react-native/docs/linking.html">here</a>. While our app is not a browser so it cannot just open links. using this library we can ask the OS if there is an app that can handle opening our link. To achieve this the functions of interest here are. <code class="language-text">Linking.canOpenURL()</code> and <code class="language-text">Linking.openURL()</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">SomeComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">handleOnPress</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Linking<span class="token punctuation">.</span><span class="token function">canOpenURL</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>can<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>can<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span>\n      <span class="token punctuation">}</span>\n\n      Linking<span class="token punctuation">.</span><span class="token function">openURL</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// rest of component definition</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>The Container</h2>\n<p>This part should be pretty straight forward we can basically use exactly what we did in the plain react version. I would recommend using the <code class="language-text">App</code> component as our container. I would recommend visiting <a href="/chapter-five-c864fc59493eb7717373c18a46cde216.md">chapter-five</a> &#x26; <a href="/chapter-six-6ecac62f5c7b1a94907e03118e1605b3.md">chapter-six</a> again for this.</p>\n<h2>The Filter</h2>\n<p>This will be a little more tricky. We can use the same pattern as we did in <a href="/chapter-seven-a06521d2510de6066aa58cab138ea3b5.md">chapter-seven</a>. However, we will need to use a different primitive component. I would recommend looking at <code class="language-text">TextInput</code>. Make sure to study the documents carefully there are some subtle differences. Docs are <a href="https://facebook.github.io/react-native/docs/textinput.html">here</a></p>\n<h2>The End</h2>\n<p>If you\'ve made it this far, seriously, well done ✨✨✨. I hope you have had an awesome time working on the bootcamp content. Feel free to keep working on the app and make whatever changes you like. Also don\'t hesitate to bug any of us if you want ideas on what to build next, have questions about react or react native, or want to know more about Tanda. We are also happy for feedback on the content. Cheers 🤙.</p>',frontmatter:{date:"March 22, 2018",path:"/chapters/port-the-rest",title:"Port The Rest"}}},pathContext:{}}}});
//# sourceMappingURL=path---chapters-port-the-rest-1a11ffe463f80b607933.js.map