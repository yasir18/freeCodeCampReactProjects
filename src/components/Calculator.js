import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
	const data = [
		{ id: 'one', value: '1' },
		{ id: 'two', value: '2' },
		{ id: 'three', value: '3' },
		{ id: 'four', value: '4' },
		{ id: 'five', value: '5' },
		{ id: 'six', value: '6' },
		{ id: 'seven', value: '7' },
		{ id: 'eight', value: '8' },
		{ id: 'nine', value: '9' },
		{ id: 'zero', value: '0' },
		{ id: 'decimal', value: '.' },
		{ id: 'clear', value: 'AC' },
		{ id: 'add', value: '+' },
		{ id: 'subtract', value: '-' },
		{ id: 'multiply', value: '*' },
		{ id: 'divide', value: '/' },
		{ id: 'equals', value: '=' },
	];

	const [displayValue, setDisplayValue] = useState('');
	const [tempValue, setTempValue] = useState('0');

	// useEffect(() => {
	//   console.log("inside use effect");
	//   console.log(displayValue);
	//   let ans;
	//   if (tempValue === "=") {
	//     ans = evaluateExpression(displayValue);
	//     setTempValue(ans);
	//     setDisplayValue("");
	//   }
	// }, [displayValue, tempValue]);

	const keyRef = React.useRef(null);

	const handleClick = (e) => {
		let key = e.target.textContent;
		console.log(key);
		if (key === '+' || key === '-' || key === '*' || key === '/') {
			if (
				tempValue[0] !== '+' &&
				tempValue[0] !== '-' &&
				tempValue[0] !== '*' &&
				tempValue[0] !== '/'
			) {
				//to add temp to disp when operator is hit first
				setDisplayValue(displayValue + tempValue);
				setTempValue(key);
			} else if (key === '-') {
				if (!tempValue.includes('-')) setTempValue(tempValue + key);
			} else {
				setTempValue(key);
			}
		} else if (key === '.') {
			if (!tempValue.includes('.')) setTempValue(tempValue + key);
		} else if (key === '=') {
			let ans = evaluateExpression(displayValue, tempValue);
			setTempValue(ans);
			setDisplayValue('');
		} else if (key === 'AC') {
			setDisplayValue('');
			setTempValue('0');
		} else {
			tempValue === '0'
				? setTempValue(key)
				: setTempValue(tempValue + key);
			if (containsOperator(tempValue)) {
				//can change below logic to keep - intact for -ve numbers
				setDisplayValue(displayValue + tempValue);
				setTempValue(key);
			}
		}
	};

	const containsOperator = (str) => {
		if (
			str.includes('+') ||
			str.includes('-') ||
			str.includes('*') ||
			str.includes('/')
		)
			return true;
		return false;
	};

	const evaluateExpression = (str1, str2) => {
		let str = str1 + str2;
		const len = str.length;
		let tempStr = '';
		let numbers = [];
		let operators = ['$'];
		for (let i = 0; i < len; i++) {
			console.log(str[i]);
			while (i < len && !containsOperator(str[i])) {
				tempStr = tempStr + str[i];
				i++;
			}
			if (i < len) {
				if (
					str[i] === '-' &&
					(i === 0 || containsOperator(str[i - 1]))
				) {
					tempStr = '-';
				} else {
					//operator
					numbers.push(Number(tempStr));
					tempStr = '';
					//need to check precedence
					while (
						precedence(str[i]) <=
						precedence(operators[operators.length - 1])
					) {
						let num1 = numbers.pop();
						let num2 = numbers.pop();
						console.log(`num2 ${num2} num1 ${num1}`);
						numbers.push(
							performOperation(
								num2,
								num1,
								operators[operators.length - 1]
							)
						);
						operators.pop();
					}
					operators.push(str[i]);
				}
			}
		}
		numbers.push(Number(tempStr));

		while (operators.length > 1) {
			let num1 = numbers.pop();
			let num2 = numbers.pop();
			numbers.push(performOperation(num2, num1, operators.pop()));
		}
		console.log(numbers);
		console.log(operators);
		return String(numbers.pop());
	};

	const performOperation = (num1, num2, oprtr) => {
		switch (oprtr) {
			case '+':
				return num1 + num2;
			case '-':
				return num1 - num2;
			case '*':
				return num1 * num2;
			case '/':
				return num1 / num2;
			default:
				return 0;
		}
	};

	const precedence = (oprtr) => {
		switch (oprtr) {
			case '+':
				return 2;
			case '-':
				return 2;
			case '*':
				return 3;
			case '/':
				return 4;
			default:
				return 0;
		}
	};
	return (
		<div id="calc">
			<div id="main">{displayValue}</div>
			<div id="display">{tempValue}</div>
			<div id="keysContainer">
				{data.map((d) => (
					<div
						id={d.id}
						class="buttons"
						ref={keyRef}
						onClick={(e) => handleClick(e)}
					>
						{d.value}
					</div>
				))}
			</div>
		</div>
	);
};

export default Calculator;
