var ids = ["con_language", "con_aptitude", "con_skills", "con_personal", "con_contact", "con_summary", "con_experience", "con_education"];
var titles = ["t_language", "t_aptitude", "t_skills", "t_summary", "t_experience", "t_education"];
var titles_eng = ["Language", "Aptitude", "Skills", "Professional Summary", "Work Experience", "Education"];
var titles_esp = ["Idioma", "Aptitud", "Habilidades", "Resumen Profesional", "Experiencia Laboral", "Educación"];
var titles_kor = ["언어", "적성", "보유 기술", "경력 요약", "업무 경력", "학력"];
var items = ["res_lang1", "res_lang2", "res_lang3", "res_apt1", "res_apt2", "res_apt3", "res_apt4", "res_skill01", "res_skill02", "res_skill03", "res_skill04", "res_skill05", "res_skill06", "res_skill07", "res_skill08", "res_skill09", "res_skill10", "res_skill11", "res_skill12", "res_skill13", "res_skill14", "res_skill15", "res_skill16", "res_name", "res_web", "res_email", "res_phone", "res_summary", "res_cname1", "res_clocation1", "res_cposition1", "res_cdate1", "res_c1job1", "res_c1job2", "res_c1job3", "res_c1job4", "res_cname2", "res_cposition2", "res_cdate2", "res_c2job1", "res_c2job2", "res_c2job3", "res_c2job4", "res_cname3", "res_clocation3", "res_cposition3", "res_cdate3", "res_c3job1", "res_c3job2", "res_uname", "res_ulocation", "res_utitle1", "res_ugpa1", "res_udate1", "res_utitle2", "res_ugpa2", "res_udate2"];
var txt_eng = ["Korean", "English", "Spanish", "Positive mind", "Quick learning", "Creative", "Troubleshooting", "Windows", "Linux", "MATLAB", "MS Office", "Solidworks", "Visual Studio", "C", "C++", "C#", "MySQL", "PHP", "CSS", "HTML", "Javascript", "Python", "Kotlin", "Dongwoo Kim", "https://areswoo.com", "asdfwoo93@gmail.com", "(+503) 7017-6118", "Graduated elementary school in Korea, middle school, and high school in El Salvador, and university in the United States. While studying in the US, worked as a part-time intern in Yushin America, which is an industrial robot company. After the graduation, worked in KIA MEXICO as a Specialist, Sr. Specialist, and Assistant Manager in Production Management. While working in KIA MEXICO, developed and managed development of system to monitor production efficiency along with HYUNDAI AUTOEVER.", "KIA MEXICO", "Pesqueria, NL, Mexico", "Specifications Control Assistant Manager", "August 2018 - September 2022", "Managed production and specifications of a model produced in KIA", "Managed a development of a web-based production monitoring system developed in .NET", "Managed inventories of materiales used in production", "Developed man hours per production calculator in C#", "Community Website Owner & Developer", "Owner & Developer", "January 2021 - January 2022", "Managed a website with 2,000 users", "Programmed server-side with PHP and managed database with MySQL", "Monitored logs with Grafana to detect errors and abusings", "Applied communication system between Telegram and the server to simplify repetitive works", "Yushin America Inc", "Cranston, RI, United States", "Part-time Intern", "December 2016 - May 2017", "Assembled and built control panels with designs", "Programmed and tested robots", "Johnson & Wales University", "Providence, RI, United States", "BS in Electronics Engineering ", "GPA 3.30", "May 2017", "AS in Robotics Engineering", "GPA 3.33", "May 2017"];
var txt_esp = ["Coreano", "Inglés", "Español", "Mente positiva", "Aprendizaje rápido", "Creativo", "Solución de problemas", "Windows", "Linux", "MATLAB", "MS Office", "Solidworks", "Visual Studio", "C", "C++", "C#", "MySQL", "PHP", "CSS", "HTML", "Javascript", "Python", "Kotlin", "Dongwoo Kim", "https://areswoo.com", "asdfwoo93@gmail.com", "(+503) 7017-6118", "Me gradué de la escuela primaria en Corea, la secundaria y la preparatoria en El Salvador, y la universidad en los Estados Unidos. Mientras estudiaba en los EE. UU., trabajé como pasante a tiempo parcial en Yushin America, que es una empresa de robots industriales. Después de la graduación, trabajé en KIA MÉXICO como especialista, especialista senior y asistente gerente en Planeación de Producción. Mientras trabajaba en KIA MÉXICO, desarrollé y gestioné el desarrollo del sistema para monitorear la eficiencia de producción junto con HYUNDAI AUTOEVER.", "KIA MÉXICO", "Pesquería, NL, México", "Asistente Gerente de Control de Especificaciones", "Agosto 2018 - Septiembre 2022", "Control de especificación y producción de un modelo que se fabrica en KIA MÉXICO", "Gestión de desarrollo de un sistema de monitoreo de producción basado en la sitio web en C#", "Control de inventario de materiales para producción", "Desarrollo de la calculadora en C# para obtener la productividad", "Dueño e Ingeniero de Propia Página de Comunidad", "Dueño e Ingeniero", "Enero 2021 - Enero 2022", "Control de una página web con 2,000 usuarios", "Programación de servidor con PHP y manejo de base de datos con MySQL", "Monitoreo de registros con Grafana a detectar los errores y abusos", "Aplicación de sistema de comunicación entre Telegram y el servidor a simplificar trabajos repetitivos", "Yushin America Inc", "Cranston, RI, Estados Unidos", "Pasante de Medio tiempo", "Diciembre 2016 - Mayo 2017", "Ensamble y construcción de paneles de control con diseños", "Prueba de programación de robot", "Johnson & Wales University", "Providence, RI, Estados Unidos", "Licenciatura en Ingenieria Electrónica", "GPA 3.30", "Mayo 2017", "Asociado en Ingenieria Robótica", "GPA 3.33", "Mayo 2017"];
var txt_kor = ["한국어", "영어", "스페인어", "긍정적 사고", "빠른 학습", "창의적 사고", "트러블 슈팅", "Windows", "Linux", "MATLAB", "MS Office", "Solidworks", "Visual Studio", "C", "C++", "C#", "MySQL", "PHP", "CSS", "HTML", "Javascript", "Python", "Kotlin", "김동우", "https://areswoo.com", "asdfwoo93@gmail.com", "(+503) 7017-6118", "한국에서 초등학교, 엘살바도르에서 중고등학교, 미국에서 대학교를 졸업. 미국에서 공부하는 동안 산업 로봇 회사인 유신 아메리카에서 인턴으로 근무. 졸업 후 기아 멕시코에서 사원, 주임, 대리로 근무하며 차량의 사양 및 생산 관리, 현대 오토에버와 협업하여 생산 효율 모니터링 시스템 개발", "기아 멕시코", "페스케리아, 누에보 레온, 멕시코", "사양 관리 대리", "2018년 8월 - 2022년 9월", "기아 멕시코에서 생산하는 차량 모델의 사양 및 생산 관리", "생산 효율 모니터링 시스템 C# 웹 사이트 개발 관리", "차량 생산에 필요한 자재 재고 관리 및 구매", "C# 베이스 생산성 계산기 프로그램 개발", "개인 커뮤니티 사이트 운영 및 개발", "운영 및 개발", "2021년 1월 - 2022년 1월", "이용자 2,000명 규모의 커뮤니티 사이트 운영", "PHP기반 서버 프로그래밍 및 MySQL 데이터 베이스 관리", "Grafana 도입으로 각종 에러 및 어뷰징 행위 모니터링", "텔레그램과 데이터 베이스 서버 통신 시스템 개발하여 각종 반복 작업 단순화", "유신 아메리카", "크랜스턴, 로드아일랜드, 미국", "인턴", "2016년 12월 - 2017년 5월", "컨트롤 패널 도면 및 제작", "로봇 프로그래밍 테스트", "존슨 앤 웨일즈 대학교", "프로비던스, 로드 아일랜드, 미국", "전자 공학 학사", "GPA 3.30", "2017년 5월", "로봇 공학 전문 학사", "GPA 3.33", "2017년 5월"];
