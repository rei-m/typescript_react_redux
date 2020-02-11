import * as React from 'react';

export interface Props extends React.Props<{}> {
  id: number;
  text: string;
  completed: boolean;
  onClick: (id: number) => void;
}

const Todo = (props: Props): JSX.Element => {
  const style = {
    textDecoration: props.completed ? 'line-through' : 'none',
  };

  const handleOnClick = (e: React.SyntheticEvent<HTMLLIElement>) => {
    props.onClick(props.id);
  };

  return (
    <li onClick={handleOnClick} style={style}>
      {props.text}
    </li>
  );
};

// ライフサイクルを意識する場合や、Stateの管理が必要な場合はReactComponentを継承した形で書く.
// プロパティを受け取って表示するだけの場合は上記のPropsを引数に取ってElementを返す関数で足りる.
//
// class Todo extends React.Component<Props, void> {
//
//   constructor(props: Props) {
//     super(props);
//     this.handleOnClick = this.handleOnClick.bind(this);
//   }
//
//   public render(): JSX.Element {
//
//     const { text, completed } = this.props;
//
//     const style = {
//       textDecoration: completed ? 'line-through' : 'none',
//     };
//
//     return (
//       <li
//         onClick={this.handleOnClick}
//         style={style}
//       >
//         {text}
//       </li>
//     );
//   }
//
//   private handleOnClick(e: React.SyntheticEvent<HTMLLIElement>) {
//     const { id, onClick } = this.props;
//     onClick(id);
//   }
// }

export default Todo;
