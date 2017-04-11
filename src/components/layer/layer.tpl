<div class="layer">
    <img src="${ require('../../assets/temp.jpg')}" alt="">
    <div> this is <%=name%> layer</div>
    <%for(var i = 0 , len = arr.length; i < len; i++) {%>
        <%=arr[i]%>
    <%}%>
</div>