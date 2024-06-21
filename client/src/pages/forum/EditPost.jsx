import EditForm from "../../components/forum/EditForm";
import NavigateButton from "../../components/buttons/NavigateButton";

const EditPost = () => {
  return (
    <div className="forum-body">
      <NavigateButton path="/forum" text="Back to Forum" variant="primary" />
      <EditForm />
    </div>
  );
};

export default EditPost;
