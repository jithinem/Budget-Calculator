function submit(){
    // alert(`${document.querySelector("#total").value}`)
    household=document.querySelector("#household").value;
    food=document.querySelector("#food").value;
    transportation=document.querySelector("#transportation").value;
    shopping=document.querySelector("#shopping").value;
    emergency=document.querySelector("#emergency").value;
    entertainment=document.querySelector("#entertainment").value;
    others=document.querySelector("#others").value;
    total=document.querySelector("#total").value

    perHouse=((household/total)*100).toFixed(2)
    perFood=((food/total)*100).toFixed(2)
    perTrans=((transportation/total)*100).toFixed(2)
    perSho=((shopping/total)*100).toFixed(2)
    perEmer=((emergency/total)*100).toFixed(2)
    perEnter=((entertainment/total)*100).toFixed(2)
    perOthers=((others/total)*100).toFixed(2)
    save=total-household-food-transportation-shopping-emergency-entertainment-others
    // save=document.querySelector("#total").value-(document.querySelector("#household").value+document.querySelector("#food").value+document.querySelector("#shopping").value
    perSave=((save/total)*100).toFixed(2)
    // perSave=100-(perHouse+perFood+perTrans+perSho+perEmer+perEnter+perOthers)
    // save=(perSave/100)*document.querySelector("#total");
    data=`<table style="margin-left:50px;font:25px bold;border:2px black solid; boder-radius:5px; background-color:skyblue" >
    <tr style:"border:2px black solid">
    <td>
    Household</td><td style="border:2px black solid">${perHouse}%
    </td>
    </tr>
    <tr style="border:2px black solid">
    <td >
    Food</td><td style="border:2px black solid">${perFood}%
    </td>
    </tr>
    <tr style="border:2px black solid">
    <td >
    Transportation</td><td style="border:2px black solid">${perTrans}%
    </td>
    </tr>
    <tr style="border:2px black solid">
    <td>
    Shopping</td><td style="border:2px black solid">${perSho}%
    </td>
    </tr>
    <tr style="border:2px black solid">
    <td>
    Emergency</td><td style="border:2px black solid">${perEmer}%
    </td>
    </tr>
    <tr style="border:2px black solid">
    <td>
    Entertainment</td><td style="border:2px black solid">${perEnter}%
    </td>
    </tr>
    <tr style="border:2px black solid">
    <td>
    Others</td><td style="border:2px black solid">${perOthers}%
    </td>
    </tr>
    <tr style="border:2px black solid;background-color:gold">
    <td>
    Your savings is $${save} which is ${perSave}% of your total income
    </td><td></td>
    </tr>



    </table>`
    // data='xxxxxxx'
    document.querySelector("#result").innerHTML=data
    // result.value=data
    // alert(`${household.value}`)
    // alert(`${perHouse}`)
}