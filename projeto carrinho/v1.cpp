//MOTOR 1 / DIREITA  
int motor1H = 3; //Controle de acionamento do motor frente
int motor1L = 5; //Controle de acionamento do motor tras

//MOTOR 2 / ESQUERDA
int motor2H = 6; //Controle de acionamento do motor frente
int motor2L = 9; //Controle de acionamento do motor tras

int tmp = 250; //Delay da função direção do motor

int infraEsquerda = A4;
int infraDireita = A5;
int infraDir, infraEsq;
   
   
void setup(){  
  //Define os pinos como saida    
  pinMode(motor1H, OUTPUT);  
  pinMode(motor1L, OUTPUT);
  pinMode(motor2H, OUTPUT);
  pinMode(motor2L, OUTPUT);
  // Infravermelhor como entrada
  pinMode(infraEsquerda, INPUT);
  pinMode(infraDireita, INPUT);
  Serial.begin(9600);
}  
   
void loop(){  
    segueLinha(80); //Parametro é a velocidade do motor
}

void segueLinha(int velocidade){
    //Leitura de valor sensor Infra
    infraEsq = analogRead(infraEsquerda);
    infraDir = analogRead(infraDireita);
    //Checagem valor sensor
    Serial.println("Esquerda =");
    Serial.println(infraEsq);
    Serial.println("Direita =");
    Serial.println(infraDir);
    //Decisão de lado dependendo do Infra
    //Claro/LOW = Sem Fita // Escuro/HIGH = Com Fita
    if(infraEsq < 400 && infraDir < 400){
      frente(velocidade);
    }else
    if(infraEsq > 400 && infraDir < 400){
    	esquerda(velocidade);
    }else
    if(infraEsq < 400 && infraDir > 400){
    	direita(velocidade);
    }else
    if(infraEsq > 400 && infraDir > 400){
      pare();
    }
}

//Funções de controle dos motores
void frente(int rpm){
  analogWrite(motor1H, rpm);  
  digitalWrite(motor1L, LOW);
  analogWrite(motor2H, rpm);  
  digitalWrite(motor2L, LOW); 
  delay(tmp);  
}

void re(int rpm){
  digitalWrite(motor1H, LOW);
  analogWrite(motor1L, rpm);
  digitalWrite(motor2H, LOW);
  analogWrite(motor2L, rpm);
  delay(tmp);
}

void pare(){
  digitalWrite(motor1H, LOW);
  digitalWrite(motor1L, LOW);
  digitalWrite(motor2H, LOW);
  digitalWrite(motor2L, LOW);
  delay(tmp);
}

void esquerda(int rpm){
  analogWrite(motor1H, rpm); 
  digitalWrite(motor1L, LOW);
  digitalWrite(motor2H, LOW);
  analogWrite(motor2L, rpm);
  delay(tmp);
}

void direita(int rpm){
  digitalWrite(motor1H, LOW);
  analogWrite(motor1L, rpm);
  analogWrite(motor2H, rpm);
  digitalWrite(motor2L, LOW);
  delay(tmp);
}