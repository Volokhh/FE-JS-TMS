import './title.css'

type Props = {
   title: string;
}


export const Title = ({ title }: Props) => {
   return (
      <h3 className="title">{title}</h3>
   )
}
