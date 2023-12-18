using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnet.Models
{
    public class Calculadora
    {
        public void Somar(int x, int y)
        {
            Console.WriteLine($"{x} + {y} = {x + y}");
        }
        public void Subtrair(int x, int y)
        {
            Console.WriteLine($"{x} - {y} = {x - y}");
        }
        public void Multiplicar(int x, int y)
        {
            Console.WriteLine($"{x} x {y} = {x * y}");
        }
        public void Dividir(int x, int y)
        {
            Console.WriteLine($"{x} / {y} = {x / y}");
        }
        public void Potencia(int x, int y)
        {
            Console.WriteLine($"{x} ^ {y} = {Math.Pow(x,y)}");
        }
        public void Seno(double angulo)
        {
            double radiano = angulo * Math.PI / 180; // conversão angulo para Radiano

            Console.WriteLine($"Seno de {angulo} = {Math.Round(Math.Sin(radiano), 4)}");
        }
        public void Coseno(double angulo)
        {
            double radiano = angulo * Math.PI / 180; // conversão angulo para Radiano

            Console.WriteLine($"Coseno de {angulo} = {Math.Round(Math.Cos(radiano), 4)}");
        }
        public void Tangente(double angulo)
        {
            double radiano = angulo * Math.PI / 180; // conversão angulo para Radiano

            Console.WriteLine($"Tangente de {angulo} = {Math.Round(Math.Tan(radiano), 4)}");
        }
        public void RaizQuadrada(double x)
        {
            Console.WriteLine($"Raiz de {x} = {Math.Sqrt(x)}");
        }
    }
}