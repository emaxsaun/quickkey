QuickKey
==========

This is a small JavaScript library for use with the JW Player. It allows for keyboard commands to control various aspects of the JW Player.

### [Demo](http://www.pluginsbyethan.com/github/quickkey.html)

Implementation:
==========

The file quickkey.js simply needs to be loaded unerneath the closing script tag for your JW Player embed. It is that simple. Like so:

<pre>
&lt;script type=&quot;text/javascript&quot; src=&quot;quickkey.js&quot;&gt;&lt;/script&gt;
</pre>

The following keyboard commands perform the following actions:

Up = Volume Up<br />
Down = Volume Down<br />
Right = Fast Forward (while playing)<br />
Left = Rewind (while playing)<br />
Space = Play/Pause<br />
Esc = Stop (or exit fullscreen)<br />
Shift = Resize<br />
Enter = Full Screen (HTML5 only)<br />
Ctrl = Mute<br />
&lt; = Previous Playlist Item<br />
&gt; = Next Playlist Item<br />

Note - If you change between playlist items while the player is stopped, it will simply go to the next or previous playlist item in a stopped state. However, if you change between playlist items while the player is playing, the next or previous playlist item will play. 

Example:
==========

<pre>
&lt;script type=&quot;text/javascript&quot; src=&quot;jwplayer.js&quot;&gt;&lt;/script&gt;
&lt;div id=&quot;player&quot;&gt;&lt;/div&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;jwplayer(&quot;player&quot;).setup({
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;primary: &quot;html5&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;autostart: false,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mute: false,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;playlist: [{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;file: &quot;http://content.bitsontherun.com/videos/3XnJSIm4-kNspJqnJ.mp4&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image: &quot;http://content.bitsontherun.com/thumbs/3XnJSIm4-640.jpg&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: &quot;Sintel Trailer&quot;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;file: &quot;http://content.bitsontherun.com/videos/i8oQD9zd-kNspJqnJ.mp4&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image: &quot;http://content.bitsontherun.com/thumbs/i8oQD9zd-640.jpg&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: &quot;Tears of Steel Trailer&quot;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;file: &quot;http://content.bitsontherun.com/videos/bkaovAYt-kNspJqnJ.mp4&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image: &quot;http://content.bitsontherun.com/thumbs/bkaovAYt-640.jpg&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: &quot;Big Buck Bunny Trailer&quot;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;file: &quot;http://content.bitsontherun.com/videos/kaUXWqTZ-kNspJqnJ.mp4&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image: &quot;http://content.bitsontherun.com/thumbs/kaUXWqTZ-640.jpg&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: &quot;Elephants Dream Trailer&quot;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}],
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;listbar: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position: &quot;right&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;size: 280
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 700,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 330
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});
&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;quickkey.js&quot;&gt;&lt;/script&gt;
</pre>

The source code is available for this script. There is just a .js file for JavaScript. Publishing the JavaScipt can be simply done with any text editor. Enjoy~! :) 
