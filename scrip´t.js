function calcular()
{
    var categoria = document.getElementById("Categorías").value;

    var cantidad = document.getElementById("Cantidad").value;

    var descuento =0.8;
    var descuento1=0.15;
    var descuento2=0.50;
    var precioTicket = 200
    
    
   if(categoria == 1) 
    {
        var resultado = (precioTicket*cantidad-((precioTicket*cantidad)*descuento));
    }

    if (categoria == 2)
    {
        var resultado = (precioTicket*cantidad-((precioTicket*cantidad)*descuento2));
    } 
    if (categoria == 3)
    {
        var resultado = (precioTicket*cantidad-((precioTicket*cantidad)*descuento1));
    } 

    document.getElementById("totalTicket").innerHTML = resultado;
}
 