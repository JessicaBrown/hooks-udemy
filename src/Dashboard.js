import React from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
	return (
		<>
			<div className="title">
				<h3 class="rainbow rainbow_text_animated">Knowledge Share June 2021</h3>
			</div>
			<div className="para">
				<p>Github and React Hooks. </p>
				<p>
					The Github course was a deep dive into the more complex parts of
					Github and collaborative coding. Some of my takeaways:
					<ul>
						<li>
							Shortcuts like: git commit -am 'message' and git checkout -b name
						</li>
						<li>
							Created an Alias to see the commits in a more user friendly way
						</li>
						<li>git hist and git log</li>
						<li>git reset (local) git rebase (repo)</li>
						<li>Directly update in Gihub as well as command line</li>
						<li>git difftool and git mergetool</li>
					</ul>
				</p>
				<p>
					The React Hooks course I created several little components to showcase
					the importance and ease of hooks.
				</p>
			</div>
			<div className="Wrapper">
				<div>
					<div className="Login">
						<Link to="/Login" className="Login-link">
							Login
						</Link>
					</div>

					<div className="Register">
						<Link to="/Register" className="Register-link">
							Register
						</Link>
					</div>
				</div>
				<div>
					<div className="HooksExamples">
						<Link to="/HooksExamples" className="Hooks-link">
							Hooks
						</Link>
					</div>

					<div className="HackerNews">
						<Link to="/HackerNews" className="Hacker-link">
							Hacker News
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
