<script>
  
import Table from '../../components/table.svelte'

function launchSnack() {
    console.info({ snack: "Hello" });
  }
  const snackbarOptions = [
    ['Prop', 'Default', 'Description'],
    ['defaultTime', '5000', 'default auto close time'],
    ['closeable', 'false', 'allow snacks to be closeable by default'],
    ['reverse', 'false', 'reverse the order of snacks (top to bottom)'],
    ['filter', 'msg => msg.snack', 'default console.info filter'],
    ['transition', 'fade', ''],
    ['passthrough', 'false', 'allow intercepted snacks to pass through the console.info wrapper. This will show them in the console and other Snackbar containers if multiple are used.'],
    ['closeHtml', "x", ''],
    ['containerClass',{
      toggle: true,
      format: 'css',
      body: `  position: fixed;
  bottom: 20px;
  right: 40px;
  text-align: right;`
    },'Replace default CSS. Additional CSS rules can be added to .snack-container'],
    ['snackClass',{
      toggle: true,
      format: 'css',
      body: `  display: inline-block; 
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background: #fff;
  padding: 4px 16px;
  margin-top: 12px;
  font-size: 1.5rem;`},
  'Replace default CSS. Additional CSS rules can be added to .snack'],
    ['closeClass',{
      toggle: true,
      format: 'css',
      body: `  cursor: pointer;
  float: left;
  padding-right: 8px;`},
  'Replace default CSS. Additional CSS rules can be added to .snack-close']
  ]

  const messageOptions = [
    ['Prop', 'Default', 'Description'],
    ['closeable', '', 'allow snack to be closed manually'],
    ['time', '', 'override default timeout (setting to 0 disables timer)'],
    ['fn', '', 'function to be called if snack is clicked'],
    ['class', '', 'class to be added to snack']
  ]
</script>



### Snackbar  
A snackbar offers instant styled notifications. Like a pretty console.log. 
<br/><br/>
<button class="btn green solid" on:click={launchSnack}>Launch a snack</button> <small> (in the lower right corner)</small>
<br/><br/>

###### Adding Snackbar
``` html
<!-- App.svelte -->
<script>
  import { Snackbar } from "svelteBricks";
</script>

<Snackbar />
```
<br/><br/>

##### Displaying a snackbar
``` javascript
    console.info({snack: 'Hello'})

```


As the keen observer may have noticed. We're using console.info. This has the advantage of requiring less boilerplate while allowing messages to be passed to the console.

<br /><br />
#### Snackbar options
<Table rows = {snackbarOptions} width = {['100px', '200px']}  />

  <br/>
  <br/>

#### Message options
<Table rows = {messageOptions} width = {['100px', '200px']} />
