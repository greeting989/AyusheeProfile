const ls = [

		{
			name : 'HTML',

		},
		{
			name : 'CSS'
		},
		{
			name : 'Javascript'
		},
		{
			name : 'React JS'
		},
		{
			name : 'Bootstrap'
		},
		{
			name : 'Figma'
		},
		{
			name : 'C'
		},
		{
			name : 'C++'
		},
		{
			name : 'Java'
		}

]

function SkillList (){
	return(
		<List_Render items={ls}/>
		);
}

function List_Render({items}){
	return items.map(items=>(
			<div>{items.name}</div>
		));
}

export default SkillList;