/*
A page that gives a description of one paragraph of a few programming languages of your choice and give the user the option to show/hide a portion of the paragraph.

Requirements
- Create a collection of programming languages of your choice.
- Display a heading and a paragraph for each programming language.
- Initially, display the first 120 characters for each paragraph.
- There is a Show More button for each programming language.

Functionality
- When the user clicks the Show More button:
	- Display the entire paragraph about the corresponding language.
	- Change the button text to Show Less.
- When the user clicks the Show Less button:
	- Change the button text to Show More.
	- Hide all but the first 120 characters of the paragraph text.
*/


const languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  },

	{
    name: 'Python',
    description: 'Python is a high-level, versatile, and readable language emphasizing simplicity, with libraries for various domains.'
  },

	{
    name: 'Perl',
    description: 'Perl is a highly versatile programming language that gained popularity for its powerful text-processing capabilities. It offers expressive syntax and built-in regular expressions, making it well-suited for tasks like parsing and manipulating textual data. Perl\'s "TIMTOWTDI" (There\'s More Than One Way To Do It) philosophy allows developers to solve problems using various approaches. It has a rich ecosystem of modules and libraries, making it easy to handle diverse tasks ranging from web development to system administration.'
  },

	{
    name: 'C++',
    description: 'C++ is a powerful and widely-used programming language known for its efficiency and performance. It combines the low-level control of C with additional features, including object-oriented programming and templates. C++ is often used for system programming, game development, and resource-constrained applications where performance is crucial. It provides a rich set of libraries and supports features like memory management, multi-threading, and generics, making it a versatile language for building robust and scalable software.'
  },

	{
    name: 'Elixer',
    description: 'Elixir is a functional, concurrent, and fault-tolerant programming language built on the Erlang Virtual Machine (BEAM). It emphasizes scalability, maintainability, and reliability, making it an excellent choice for developing distributed and fault-tolerant systems. Elixir\'s syntax is inspired by Ruby, and it leverages the Erlang ecosystem, which has a proven track record in building highly available and fault-tolerant applications. It supports concurrency through lightweight processes called "actors" and provides built-in tools for managing state and handling failure scenarios, making it a powerful language for building reliable and scalable applications.'
  },
];

class LanguageFormatter {
	constructor(languages) {
		this.container = document.getElementById('container');
		this.languages = languages;
		this.populateContainer();
		this.addhandlers();
	}

	addhandlers() {
		this.addDescriptionHandler.call(this);
	}

	createTemplate() {
		return `
			<div>
				<h2>{{language}}</h2>
				<p class="full">{{description}}</p>
				<a class="language-button {{class_name}}">{{button_text}}</a>
			</div>
		`;
	}

	formatDescription(description, anchor) {
		if (description.length < 120) {
			anchor.remove();
			return description;
		} else {
			return description.slice(0, 120) + ' ...';
		}
	}
	
	populateContainer() {
		for (let language of this.languages) {
			const template = Handlebars.compile(this.createTemplate());
			const html = template({
				language: language.name, 
				description: language.description, 
				class_name: language.name.toLowerCase(), 
				button_text: "Show More"
			});

			const div = document.createElement('div');
			div.innerHTML = html;
			this.toggleDescriptionContent(div.firstElementChild);
			this.container.appendChild(div);
		}
	}

	toggleDescriptionContent(div) {
		const [ header, paragraph, anchor] = [...div.children];
		const targetLanguage = languages.filter((language) => anchor.classList.contains(language.name.toLowerCase()));
		paragraph.classList.toggle('full');
	
		if (paragraph.classList.contains('full')) {
			paragraph.textContent = targetLanguage[0].description;
			anchor.textContent = 'Show Less';
		} else {
			paragraph.textContent = this.formatDescription(targetLanguage[0].description, anchor);
			anchor.textContent = 'Show More';
		}
	}

	addDescriptionHandler() {
		const self = this;
		this.container.addEventListener('click', function(e) {
			if (e.target.classList.contains('language-button')) {
				const parentDiv = e.target.parentElement;
				console.log(this)
				self.toggleDescriptionContent(parentDiv);
			}
		});
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const langFormatter = new LanguageFormatter(languages);
});