// Console.Write("Digite seu nome: ");
// string name = Console.ReadLine();

// Console.Write("Digite seu ano de nascimento: ");
// int year = int.Parse(Console.ReadLine());

// int age = 2023 - year;

// Console.WriteLine($"Você tem {age} anos.");

// if(age >= 18) 
// {
//   Console.WriteLine("Você é maior de Idade!");
// } 
// else 
// {
//   Console.WriteLine("Você é menor de idade!");
// }

class Program
{
  static void Main()
  {
    string[] names = {"Gui", "lhe", "rme"};

    for (int i = 0; i < names.Length; i++)
    {
      Console.WriteLine(names[i]);
    }
  }
}