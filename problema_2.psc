Funcion mayorAlza(valorAlzaDolar, valorDolar)
	valorAlzaDolar[i+1] = valorDolar[i+1]
	para i=1 hasta numDias con paso 1 Hacer
		para j=1 hasta numDias -1 con paso 1 hacer
			si valorAlzaDolar[j] > valorAlzaDolar[j+1] Entonces
				aux = valorAlzaDolar[j]
				valorAlzaDolar[j] = valorAlzaDolar[j+1]
				valorAlzaDolar[j+1] = aux
				
			FinSi
			Escribir valorAlzaDolar[j]
		finpara
	FinPara
FinFuncion

Algoritmo problema_2
//	Este problema apareció en el certamen recuperativo 1 del segundo semestre de 2011 en el campus Vitacura.
//	
//	Un analista financiero lleva un registro del precio del dólar día a día, y desea saber cuál fue la mayor de las alzas en el precio diario a lo largo de ese período.
//	
//	Escriba un programa que pida al usuario ingresar el número n de días, y luego el precio del dólar para cada uno de los n días.
//		
//		El programa debe entregar como salida cuál fue la mayor de las alzas de un día para el otro.
//			
//		Si en ningún día el precio subió, la salida debe decir: No hubo alzas.
	
	Escribir "Escriba la cantidad de dias en los cuales desea evaluar el cambio en el alza del dolar"
	leer numDias
	dimension valorDolar[numDias+1], valorAlzaDolar[numDias+1]
	para i =1 hasta numDias Hacer
		escribir "Ingrese el valor del dia " i
		leer valorDolar[i]
	finpara
	mayorAlza(valorAlzaDolar, valorDolar)
	valorAlzaDolar[i] = valorDolar[i]
	para i =1 hasta numdias Hacer
		escribir valorAlzaDolar[i]
	FinPara
FinAlgoritmo