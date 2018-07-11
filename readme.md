# Brand Color CSS Generator

A simple tool that helps you generate brand specific color CSS codes without any hassle. Can be use to colorized your solcial icons or social links or sharing buttons on your website or project. No need to use any preprocessor, just select which brands you need, add your CSS rules and click generate. Simple as 1, 2, 3!

#### How to make CSS rules:

Write down your CSS selectors in the left textarea as you do in your CSS code. Multiple selectors with comma (,) seperated. Just put `%%` where you want to put brand class.
In the right textarea, put CSS properties and values for the selectors. Just put `##` where you need the brand color.

Add as many rules as you need.

For example: You are adding 2 rules.
**Selector for Rule 1:**
```
.social-links a .fa-%%,
.share-links a .fa-%%
```
**Properties for Rule 1:**
```
color: #fff;
background: ##
```

**Selector for Rule 2:**
```
.social-links a:hover .fa-%%,
.share-links a:hover .fa-%%
```
**Properties for Rule 2:**
```
color: ##;
background: #fff;
box-shadow: ## 0 2px 5px;
```
![Sample Rules](sample-rules.jpg?raw=true "Sample Rules")

If you now select facebook, instagram and linkedin then click generate, these codes will be produced:

![Sample Result](sample-result.jpg?raw=true "Sample Result")

#### Custom Colors

You can override a defualt color or add new colors from **Add/Modify Colors** section. For example, I want to change google color to secondary green color and add my own brand color. So it may look like:

![Custom Colors](color-custom.jpg?raw=true "Custom Colors")

#### Suggestion

If you think there need to be any colors added or changed, please create an issue or pull request.

#### License

Released under MIT License